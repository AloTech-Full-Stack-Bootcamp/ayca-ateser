import { series } from "./data.js";
import { fancyLogSeriesReport } from "./utils.js";

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    this.series.push(serie);
    //(If a serie has been watched) {
    if (serie.isWatched) {
      // Update the count of watched series: "numberOfWatched"
      this.numberOfWatched += 1;
      // Check for "lastSerie" property, set if we don't.
      if (!this.lastSerie) this.lastSerie = serie;
      // Check for "lastSerie"'s finishedDate, if the serie's "finishedDate" prop is greater, set "lastSerie" prop to "serie" object.
      if (new Date(serie.finishedDate) > new Date(this.lastSerie.finishedDate))
        // set "lastSerie" prop to "serie" object.
        this.lastSerie = serie;
      // If a serie hasn't been watched:
    } else {
      // Update the count of watched series: "numberOfUnWatched"
      this.numberOfUnWatched += 1;
      // Check if serie has "isCurrent" prop
      // Check if we have. a "currentSerie" property. Set if we don't.
      if (serie.isCurrent) this.currentSerie = serie;
      // Check if we have a "nextSerie" property as well - if we didn't
      else if (!this.nextSerie) this.nextSerie = serie;
    }
    //it should also update the number of series marked as watched / unwatched:
    //"numberOfWatched" and "numberOfUnWatched"
  };

  //check to see if we have series to process
  if (series.length > 0) {
    //Loop through all of the series in the "series" argument
    //Use the .add function to handle adding series, so we keep counts updated.
    series.map((serie) => this.add(serie));
  }

  this.finishSerie = function () {
    const today = new Date();
    let currentDate =
      today.getFullYear() +
      "." +
      (today.getMonth() + 1) +
      "." +
      today.getDate();

    series.forEach((serie) => {
      if (serie.isCurrent && serie === this.currentSerie) {
        // find and update currently watching serie in "this.series" array
        serie.isCurrent = false;
        serie.isWatched = true;
        serie.finishedDate = currentDate;
      }
    });
    // update "lastSerie" with the finished one
    this.lastSerie = this.currentSerie;
    // set "currentSerie" with the next one
    this.nextSerie.isCurrent = true;
    this.currentSerie = this.nextSerie;
    this.nextSerie = undefined;
    series.forEach((serie) => {
      // set new nextSerie value with the next one which has not been watched.
      if (!serie.isCurrent && !serie.isWatched && !this.nextSerie)
        this.nextSerie = serie;
    });
    // update "numberOfWatched" and "numberOfUnWatched" props
    this.numberOfWatched += 1;
    this.numberOfUnWatched -= 1;
  };
  this.printSeriesReport = function () {
    fancyLogSeriesReport(this);
  };
}

// Case 1
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.printSeriesReport(); */

// Case 2
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.finishSerie();
mySeriesTracker.printSeriesReport(); */

// Case 3
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
const newSerie = {
  id: "9",
  name: "Lost",
  genre: "Adventure",
  directorId: "4"
};
mySeriesTracker.add(newSerie);
mySeriesTracker.printSeriesReport(); */

import random
def random_number_generator(n,L=6):
    if n>0 and L>0:
        numbers=[]
        while len(numbers)!=n:
           number=random.randrange(10**(L-1),10**L)
           if number not in numbers:
            numbers.append(number)
        return numbers
    else:
        return "n and L must be greater than 0"
print(random_number_generator(-8,6))
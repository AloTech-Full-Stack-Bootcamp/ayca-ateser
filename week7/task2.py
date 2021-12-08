def my_awesome_decorator(fun):
    def wrapped(*args):
        return not fun(*[number+1 for number in args])
    return wrapped
    
@my_awesome_decorator
def mod_batch(*numbers):
    return all([True if number % 3 == 0 else False for number in numbers])
print(mod_batch(1,2,3))
print(mod_batch(3,9,21))


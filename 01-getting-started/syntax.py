# define attributes / variables
# number (int float in python)
# string
# boolean
# array
# dictionary / objects
# None
# if / else
# functions
# parameters
# returns
# arrays
# add to the front
# add to the end
# update values
# loops
# for/in
# Objects / Dictionaries
# declare object
# lookup key to retrieve the value


def define_type(item):
    if type(item) is int:
        return 'integer'
    elif type(item) is float:
        return 'float'
    elif type(item) is str:
        return 'string'
    elif type(item) is bool:
        return 'boolean'
    elif type(item) is dict:
        return 'dictionary'
    elif type(item) is list:
        return 'list'
    elif type(item) is tuple:
        return 'tuple'
    elif type(item) is set:
        return 'set'
    elif type(item) is None:
        return None


def is_over_fifty(num):
    if num > 50:
        return 'success'
    else:
        return 'failed'

# list methods


def my_function(num1, num2):
    return num1 + num2


def list_add_start(ls, item):
    ls.insert(0, item)
    return ls


def list_add_end(ls, item):
    ls.append(item)
    return ls


def list_update_value(ls, item, idx):
    ls[idx] = item
    return ls

# loop methods


def for_in_loop(str):
    new_list = []
    for letter in str:
        new_list.append(letter)
    return new_list


def while_loop(data):
    i = 0
    my_string = ''
    while(i < 3):
        my_string += data
        i += 1
    return my_string

def dict_read_first_key(obj):
    my_list = list(obj.items())
    return f'the first property is {my_list[0][0]} and the value is {my_list[0][1]}'

def zip_my_lists(list1, list2):
    new_list = list(zip(list1, list2))
    return new_list

print(zip_my_lists([1,2,3],[4,5,6]))

def merge_sets(set1, set2):
    new_set = set1.union(set2)
    return new_set

print(merge_sets({1,2},{4,5}))

def email(fname, lname):
    return f'{fname.lower()}.{lname.lower()}@evolveu.ca'
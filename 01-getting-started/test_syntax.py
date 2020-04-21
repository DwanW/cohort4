#pipenv shell
#pip install pytest
#cd into test folder
#run pytest filename.py or just pytest in the folder

from syntax import *
import pytest

def test_defineDataTypes():
    assert define_type(1) == "integer"
    assert define_type(1.1) == 'float'
    assert define_type('color') == 'string'
    assert define_type(True) == 'boolean'
    assert define_type({'wow':1}) == 'dictionary'
    assert define_type([]) == 'list'
    assert define_type(()) == 'tuple'
    assert define_type({1,2}) == 'set'
    assert define_type(None) == None

def test_isOverFifty():
    assert is_over_fifty(51) == 'success'
    assert is_over_fifty(30) == 'failed'

def test_myFunction():
    assert my_function(3,4) == 7
    assert my_function(4,5) == 9

def test_listMethods():
    assert list_add_start([1,2], 3) == [3,1,2]
    assert list_add_start([], 8) == [8]
    assert list_add_end([1,2], 3) == [1,2,3]
    assert list_add_end([], 99) == [99]
    assert list_update_value([1,2,3], 4, 1) == [1,4,3]
    assert list_update_value([4,7,1], 11, 2) == [4,7,11]

def test_loopMethods():
    assert for_in_loop('mycar') == ['m','y','c','a','r']
    assert for_in_loop('bar') == ['b','a','r']
    assert while_loop('telescope') == 'telescopetelescopetelescope'
    assert while_loop('tree') == 'treetreetree'

def test_dictMethods():
    assert dict_read_first_key({'name':'Sam'}) == 'the first property is name and the value is Sam'
    assert dict_read_first_key({'color':'orange'}) == 'the first property is color and the value is orange'

def test_tupleMethods():
    assert zip_my_lists([1,2,3],[4,5,6]) == [(1,4),(2,5),(3,6)]
    assert zip_my_lists([11,3],[90,40]) == [(11,90),(3,40)]

def test_setMethods():
    assert merge_sets({1,3,4}, {3,6,8}) == {1,3,4,6,8}
    assert merge_sets({12}, {34}) == {12,34}
# -*- coding: utf-8 -*-
"""
Created on Thu Dec 17 12:46:35 2020

@author: AEGEAN
"""

import concurrent.futures

def foo(bar):
    print('hello {}'.format(bar))
    return 'foo'

with concurrent.futures.ThreadPoolExecutor() as executor:
    future = executor.submit(foo, 'world!')
    future2 = executor.submit(foo, 'Ege!')
    return_value = future.result()
    return_value2 = future.result()
    print(return_value)
    print(return_value2)
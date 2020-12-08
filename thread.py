# -*- coding: utf-8 -*-
"""
Created on Tue Dec  8 20:04:20 2020

@author: AEGEAN
"""

import concurrent.futures

def foo(bar):
    return bar

with concurrent.futures.ThreadPoolExecutor() as executor:
    for i in range(10): 
        future = executor.submit(foo, i)
        return_value = future.result()
        print(return_value)
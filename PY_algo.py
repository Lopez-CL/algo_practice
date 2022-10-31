"""Find minimum value of list:
Write a function that accepts a list as input and returns the smallest value
found.  If the list is empty, return None."""

from math import factorial

from symbol import factor


def find_min(arr):
    minimum = min(arr)
    return minimum
print(find_min([1,-2,4,-9]))


"""Count vowels:
Write a function that accepts a string and returns the number of vowels found.
For this exercise, "a", "e", "i", "o" and "u" are vowels - we will not count
"y" as a vowel.
BONUS: Make the function count "A", "E", etc.  In other words, have this function
handle all strings, regardless of case sensitivity."""

vowel_list = ['a','e','i','o','u']
def vowel_count(str):
    lower_str = str.lower()
    count = 0
    for letter in lower_str:
        for vowel in vowel_list:
            if letter == vowel:
                count += 1 
                print(count)
    return f"There are {count} vowels in {str}!"

print(vowel_count("Oscar Issac, I will write you an IOU!"))


"""Factorial:
In mathematics, n! (read "n factorial") is equal to 1 * 2 * 3 * ... * n.
For example:
2! = 1 * 2 = 2
3! = 1 * 2 * 3 = 6
4! = 1 * 2 * 3 * 4 = 24
Write a function that takes an integer, n, as input and returns the product
1 * 2 * ... * n.  By definition, 0! = 1 and 1! = 1.  If the number
is negative, return 1."""

def factorial_fun(n):
    factorial = 1
    if n < 0:
        return factorial
    else:
        for i in range(n):
            factorial = factorial * (i+1)
            # print(factorial) used this to test
        return factorial
print(factorial_fun(4))


"""
Scrabble Score
(From https://edabit.com/challenge/cH5ce3f4QgnreDW4v)
You are given a list of dictionaries, where each dictionary looks like the following:
{"tile": "A", "score": 1}
Your objective is to return the total score from the list of tiles (dictionaries).
Example:
x = [
    {"tile": "P", "score": 3},
    {"tile": "H", "score": 4},
    {"tile": "A", "score": 1},
    {"tile": "N", "score": 1},
    {"tile": "T", "score": 1},
    {"tile": "O", "score": 1},
    {"tile": "M", "score": 3},
]
PHANTOM will return 14 (3 + 4 + 1 + 1 + 1 + 1 + 3).
# """



"""
Filter Strings from List
(Modified from this version from Edabit: https://edabit.com/challenge/nunJurLEibCyn8fzn)
Given a list containing strings and numbers, return a new list with all string values removed.
Keep the original order of the values the same.
Examples:
[3, 8, "hello", -4] should return [3, 8, -4]
["money", "33", 4, "blue", 5] should return [4, 5] ("33" is a string, not a number)
"""


"""
Frequency distribution (from https://edabit.com/challenge/KKmM4ob5wwPwf8kgS):
Given a list of items, return a dictionary that contains the frequency of each item.
Each key will be an entry from the list, and the value linked to the key will be
the number of occurrences of said key in the list.  If the list is empty, return
an empty dictionary.
Examples:
["M", "P", "C", "C", "P"] returns { "M": 1, "P": 2, "C": 2} as there are 2 "P"s, 2 "C"s and 1 "M"
[1, 5, 8, 5, 5, 3] returns { 1: 1, 5: 3, 8: 1, 3: 1 } (Note it's okay that a key is a number or boolean)
[] returns {}"""



"""Min-max sum (from HackerRank):
https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
Given a list of 5 positive integers, find and print the minimum and maximum 
sum you get when adding any 4 of the 5 values.
Examples:
[1, 2, 3, 4, 5] should print 10 (1+2+3+4) and 14 (2+3+4+5)
[5, 8, 3, 6, 2] should print 16 and 22"""

# One technique (not shown): sort the list, 
# then remove the first value to get the max value and for the min sum, remove the last value

"""
Swap case (from HackerRank):
https://www.hackerrank.com/challenges/swap-case/problem?isFullScreen=true
Given a string, return a new string where the letters switch case.
Examples:
"Help" -> "hELP"
"let'S Go" -> "LET's gO"
"123 MaiN St." -> "123 mAIn sT."
"""

"""
First and last index (from Edabit):
https://edabit.com/challenge/AYpxyzbnbS7BGSgvd
Given a string and a character, return a list containing the first and last index of the given character.  If the
character does not appear at all in the string, return "None".
Examples:
"green", "e" would return [2, 3]
"evening moon", "n" would return [3, 11]
"blue", "b" would return [0, 0] as "b" appears only once
"green", "a" would return None
"""

"""
Breaking best and worst records (from HackerRank):
https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
See link for full explanation, but the general idea is you're given a list of scores, and you have 
to return the number of times you've broken your record (ties don't count) for highest and lowest scores as a
new list in the form [num_times_high_record_broken, num_times_low_record_broken].  
(The first score doesn't count for breaking a record.)  Assume the list has at least one score in it.
Examples:
[12, 24, 10, 24] would return [1, 1]
[5, 8, 7, 3, 2, 10, 15] would return [3, 2] 
for breaking the maximum score record 3 times (8, then 10, then 15 after the initial score of 5) and
for breaking the minimum score record twice (3, then 2 after the initial score of 5)
"""

"""
Check subset (from HackerRank):
https://www.hackerrank.com/challenges/py-check-subset/problem?isFullScreen=true
Given two lists of values, determine whether the first list's values can all be found in the second list.  
In other words, is the first list, A, a subset of the second list, B?
Return True if so, False if not.
Examples:
[2, 5, 7] and [8, 5, 7, 4, 2] returns True as 2, 5 and 7 are all found in the second list
[2, 2, 3] and [8, 2, 3, 5] returns False as while 2 and 3 are found, there is only a single 2 in the second list
[] and [4, 5] returns True.  An empty list is a subset of an empty list technically.
"""
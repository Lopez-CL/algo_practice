Find minimum value of list:
Write a function that accepts a list as input and returns the smallest value
found.  If the list is empty, return None.
"""

"""
Count vowels:
Write a function that accepts a string and returns the number of vowels found.
For this exercise, "a", "e", "i", "o" and "u" are vowels - we will not count
"y" as a vowel.
BONUS: Make the function count "A", "E", etc.  In other words, have this function
handle all strings, regardless of case sensitivity.
"""


"""
Factorial:
In mathematics, n! (read "n factorial") is equal to 1 * 2 * 3 * ... * n.
For example:
2! = 1 * 2 = 2
3! = 1 * 2 * 3 = 6
4! = 1 * 2 * 3 * 4 = 24
Write a function that takes an integer, n, as input and returns the product
1 * 2 * ... * n.  By definition, 0! = 1 and 1! = 1.  If the number
is negative, return 1.
"""

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
"""



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
[] returns {}
"""


"""
# Number of digits in a number (https://edabit.com/challenge/yFJzLfYghz7ZtsyAN)
Given an integer as input, return the number of digits in the integer.
You may assume the number is an integer (whole number) only.
Examples:
24 -> 2 digits
23849 -> 5
0 -> 1
-15 -> 2 (don't count the "-")
"""
'''
High Score
(Question and solution taken from Interview Cake)
You've created an extremely popular game. You rank players in the game from highest to lowest score. So far you're using an algorithm that sorts in O(n log n) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

Write a function that takes:

an array of unsorted_scores, and
the highest_possible_score in the game,
and returns a sorted array of scores in less than O(n log n) time.
'''

'''
Example (don't give to interviewee; let them come up with their own inputs and outputs):

unsorted_scores = [37, 89, 41, 65, 91, 53]
HIGHEST_POSSIBLE_SCORE = 100

sort_scores(unsorted_scores, HIGHEST_POSSIBLE_SCORE)
# returns [37, 41, 53, 65, 89, 91]
Clarification (again, not to be given out to interviewee unless asked for):
'''

'''
In aiming for n log n, we define n as the number of unsorted_scores because we're expecting the number of players to keep growing.
We'll treat highest_possible_score as a constant instead of factoring it into our big O time and space costs, because the highest possible score won't change.
Bonus: If the interviewee finishes early: Our solution returns a separate, sorted array. Could we instead sort the array in place? Does this change the time complexity? The space complexity?
'''

def highScore(unsorted_scores, highest_possible_score):
    '''
    # initialize variable to store all scores before highest
    scores = [0] * (highest_possible_score + 1)

    # populate that variable
    for score in unsorted_scores:
        scores[score] += 1

    # initialize another variable for array of sorted scores
    sorted_scores = []

    # loop first variable to sort based on differences

    for s in unsorted_scores:

        if s < highest_possible_score:
        # push each to sorted array
            sorted_scores.push(s)

    return sorted_scores
    '''

    '''
    # initialize variable to store all scores before highest
    scores = [0] * (highest_possible_score + 1)

    # populate that variable
    for score in unsorted_scores:
        scores[score] += 1

    # initialize another variable for array of sorted scores
    sorted_scores = []

    # loop first variable to sort based on differences
    for s in range(len(scores) - 1, -1, -1):
        if scores[s] > 0:
            for i in range(scores[s]):
                sorted_scores.append(s)

    return sorted_scores
    '''

print(highScore([37, 89, 41, 65, 91, 53], 100)) # [37, 41, 53, 65, 89, 91]

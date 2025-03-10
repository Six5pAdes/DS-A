// mon
/* Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

Input: points = [[1,1],[2,2],[3,3]]
Output: 3

Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
*/

function maxPoints(points) {
    let max = 0;

    for (const x of points) {
        const slopes = new Map();

        for (const y of points) {
            if (x === y) continue;
            let slope = Infinity;

            if (y[0] - x[0] !== 0) {
                slope = (y[1] - x[1]) / (y[0] - x[0])
            }

            if (slopes.has(slope)) {
                slopes.set(slope, slopes.get(slope) + 1)
            } else {
                slopes.set(slope, 1)
            }

            max = Math.max(max, slopes.get(slope))
        }
    }

    return max + 1;
}

// Time: O(n^2), Space: O(N)

console.log(maxPoints([[1, 1], [2, 2], [3, 3]]))
console.log(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]))

// tues

// weds

// thurs

// fri

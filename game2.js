import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Initialize a 2D array
        int[][] milesTracker = {
            {10, 20, 30},
            {-5, 15, 25},
            {40, 0, -10}
        };

        // Initialize maxMiles and minMiles with the first element of the array
        int maxMiles = milesTracker[0][0];
        int minMiles = milesTracker[0][0];

        // Iterate over the 2D array to find the maximum and minimum values
        for (int i = 0; i < milesTracker.length; i++) {
            for (int j = 0; j < milesTracker[i].length; j++) {
                if (milesTracker[i][j] > maxMiles) {
                    maxMiles = milesTracker[i][j];
                }
                if (milesTracker[i][j] < minMiles) {
                    minMiles = milesTracker[i][j];
                }
            }
        }

        // Print the maximum and minimum values
        System.out.println("Max miles: " + maxMiles);
        System.out.println("Min miles: " + minMiles);

        scanner.close();
    }
}
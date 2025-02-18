package main

import "fmt"

func main() {
	sliceInts := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	for _, number := range sliceInts {
		if number%2 == 0 {
			fmt.Println(number, " is Even")
		} else {
			fmt.Println(number, " is Odd")

		}
	}

}

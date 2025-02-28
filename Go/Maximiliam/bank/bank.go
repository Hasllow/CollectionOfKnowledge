package main

import "fmt"

func main() {
	accountBalance := 1000.0

	fmt.Println("Welcome to Go Bank!")
	fmt.Println("What do you want to do?")
	fmt.Println("1. Check Balance")
	fmt.Println("2. Deposit Money")
	fmt.Println("3. Withdraw Money")
	fmt.Println("4. Exit")

	var choice int
	fmt.Print("Enter your choice: ")
	fmt.Scanln(&choice)

	fmt.Println("Your choice is: ", choice)

	if choice == 1 {
		fmt.Println("Your account balance is: ", accountBalance)
	} else if choice == 2 {
		var depositAmount float64

		fmt.Print("Your deposit: ")
		fmt.Scanln(&depositAmount)

		accountBalance += depositAmount
		fmt.Println("Your account balance is:", accountBalance)
	} else if choice == 3 {
		var withdrawAmount float64

		fmt.Print("Your withdraw: ")
		fmt.Scanln(&withdrawAmount)

		if withdrawAmount > accountBalance {
			fmt.Println("Insufficient balance!")
		} else {
			accountBalance -= withdrawAmount
			fmt.Println("Your account balance is: ", accountBalance)
		}
	} else if choice == 4 {
		fmt.Println("Thank you for using Go Bank!")
	} else {
		fmt.Println("Invalid choice!")
	}
}

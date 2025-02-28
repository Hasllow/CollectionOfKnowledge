package main

import "fmt"

func main() {
	accountBalance := 1000.0
	var choice int

	fmt.Println("Welcome to Go Bank!")

	for {
		fmt.Println("What do you want to do?")
		fmt.Println("1. Check Balance")
		fmt.Println("2. Deposit Money")
		fmt.Println("3. Withdraw Money")
		fmt.Println("4. Exit")

		fmt.Print("Enter your choice: ")
		fmt.Scanln(&choice)

		fmt.Println("Your choice is: ", choice)

		switch choice {
		case 1:
			fmt.Println("Your account balance is: ", accountBalance)
		case 2:
			var depositAmount float64

			if depositAmount < 0 {
				fmt.Println("Invalid deposit amount!")
				continue
			}

			fmt.Print("Your deposit: ")
			fmt.Scanln(&depositAmount)

			accountBalance += depositAmount
			fmt.Println("Your account balance is:", accountBalance)
		case 3:
			var withdrawAmount float64

			fmt.Print("Your withdraw: ")
			fmt.Scanln(&withdrawAmount)

			if withdrawAmount < 0 {
				fmt.Println("Invalid withdraw amount!")
				continue
			}

			if withdrawAmount > accountBalance {
				fmt.Println("Insufficient balance!")
				continue
			}

			accountBalance -= withdrawAmount
			fmt.Println("Your account balance is: ", accountBalance)
		default:
			fmt.Println("Thank you for using Go Bank!")
			return
		}
	}
}

package main

import (
	"errors"
	"fmt"
	"os"
)

const accountBalanceFile = "balance.txt"

func writeBalanceToFile(balance float64) {
	balanceText := fmt.Sprint(balance)
	os.WriteFile(accountBalanceFile, []byte(balanceText), 0644)
	// os.WriteFile("balance.txt", fmt.Appendf(nil, "%f", balance), 0644)
}

func getBalanceFromFile() (float64, error) {
	balanceText, err := os.ReadFile(accountBalanceFile)
	if err != nil {
		fmt.Println("Error reading balance file: ", err)
		return 0.0, errors.New("error reading balance file")
	}

	var balance float64
	fmt.Sscanf(string(balanceText), "%f", &balance)
	return balance, nil
}

func main() {
	accountBalance, err := getBalanceFromFile()
	if err != nil {
		fmt.Println("Error: ", err)
	}

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

		switch choice {
		case 1:
			fmt.Println("Your account balance is: ", accountBalance)
		case 2:
			var depositAmount float64

			fmt.Print("Your deposit: ")
			fmt.Scanln(&depositAmount)

			if depositAmount < 0 {
				fmt.Println("Invalid deposit amount!")
				continue
			}

			accountBalance += depositAmount
			writeBalanceToFile(accountBalance)
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
			writeBalanceToFile(accountBalance)
			fmt.Println("Your account balance is: ", accountBalance)
		default:
			fmt.Println("Thank you for using Go Bank!")
			return
		}
	}
}

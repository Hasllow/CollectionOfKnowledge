package main

import (
	"fmt"

	"example.com/bank/fileops"
	"github.com/Pallinder/go-randomdata"
)

const accountBalanceFile = "balance.txt"

func main() {
	accountBalance, err := fileops.GetFloatFromFile(accountBalanceFile)
	if err != nil {
		fmt.Println("Error: ", err)
	}

	var choice int

	fmt.Println("Welcome to Go Bank", randomdata.FullName(randomdata.RandomGender))

	for {
		presentOptions()
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
			fileops.WriteFloatToFile(accountBalance, accountBalanceFile)
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
			fileops.WriteFloatToFile(accountBalance, accountBalanceFile)
			fmt.Println("Your account balance is: ", accountBalance)
		default:
			fmt.Println("Thank you for using Go Bank!")
			return
		}
	}
}

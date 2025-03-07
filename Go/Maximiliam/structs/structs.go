package main

import (
	"fmt"
	"time"
)

type User struct {
	firstName string
	lastName  string
	birthDate string
	createAt  time.Time
}

func (u User) outputUserData() {
	fmt.Println(u.firstName, u.lastName, "was born on", u.birthDate)
}

func main() {
	userFirstName := getUserData("Enter your first name: ")
	userLastName := getUserData("Enter your last name: ")
	userBirthDate := getUserData("Enter your birth date: ")

	var appUser User
	appUser = User{
		firstName: userFirstName,
		lastName:  userLastName,
		birthDate: userBirthDate,
		createAt:  time.Now(),
	}

	fmt.Println(userFirstName, userLastName, "was born on", userBirthDate)
	appUser.outputUserData()
}

func getUserData(promptText string) string {
	fmt.Println(promptText)
	var input string
	fmt.Scanln(&input)
	return input
}

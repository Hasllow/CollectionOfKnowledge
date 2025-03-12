package main

import (
	"errors"
	"fmt"
	"time"
)

type User struct {
	firstName string
	lastName  string
	birthDate string
	createAt  time.Time
}

func (u *User) outputUserData() {
	fmt.Println(u.firstName, u.lastName, "was born on", u.birthDate)
}

func (u *User) clearUserName() {
	u.firstName = ""
	u.lastName = ""
}

func newUser(firstName, lastName, birthDate string) (*User, error) {
	if firstName == "" || lastName == "" || birthDate == "" {
		return nil, errors.New("first name, last name, birthdate are required")
	}

	return &User{
		firstName: firstName,
		lastName:  lastName,
		birthDate: birthDate,
		createAt:  time.Now(),
	}, nil
}

func main() {
	userFirstName := getUserData("Enter your first name: ")
	userLastName := getUserData("Enter your last name: ")
	userBirthDate := getUserData("Enter your birth date: ")

	var appUser, err = newUser(userFirstName, userLastName, userBirthDate)

	if err != nil {
		fmt.Println(err)
		return
	}

	appUser.outputUserData()
	appUser.clearUserName()
	appUser.outputUserData()
}

func getUserData(promptText string) string {
	fmt.Print(promptText)
	var input string
	fmt.Scanln(&input)
	return input
}

package main

import (
	"fmt"

	"example.com/structs/user"
)

func main() {
	userFirstName := getUserData("Enter your first name: ")
	userLastName := getUserData("Enter your last name: ")
	userBirthDate := getUserData("Enter your birth date: ")

	var appUser, err = user.New(userFirstName, userLastName, userBirthDate)

	if err != nil {
		fmt.Println(err)
		return
	}

	admin := user.NewAdmin("email@example.com", "test123")

	admin.User.OutputUserData()
	admin.User.ClearUserName()
	admin.OutputUserData()

	appUser.OutputUserData()
	appUser.ClearUserName()
	appUser.OutputUserData()
}

func getUserData(promptText string) string {
	fmt.Print(promptText)
	var input string
	fmt.Scanln(&input)
	return input
}

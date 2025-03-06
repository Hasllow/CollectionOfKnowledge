package main

import "fmt"

func main() {
	age := 32

	var agePointer *int
	agePointer = &age

	fmt.Println("Age:", *agePointer)
	editAgeToAdultYears(agePointer)

	fmt.Println("Adult years:", *agePointer)
}

func editAgeToAdultYears(age *int) {
	*age = *age - 18
}

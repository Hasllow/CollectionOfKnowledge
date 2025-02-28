package main

import (
	"errors"
	"fmt"
	"os"
)

func main() {
	revenue, err := getUserValue("Revenue: ")
	if err != nil {
		panic(err)
	}
	expenses, err := getUserValue("Expenses: ")
	if err != nil {
		panic(err)
	}

	tax_rate, err := getUserValue("Tax Rate: ")
	if err != nil {
		panic(err)
	}

	ebt, eat, ratio := calculateProfit(revenue, expenses, tax_rate)
	saveToFile(ebt, eat, ratio)

	fmt.Printf("Earnings Before Tax: %.2f\n", ebt)
	fmt.Printf("Earnings After Tax: %.2f\n", eat)
	fmt.Printf("Ratio: %.2f\n", ratio)
}

func getUserValue(message string) (float64, error) {
	var value float64
	fmt.Print(message)
	fmt.Scan(&value)

	if value <= 0 {
		fmt.Println("Invalid value! Must be greater than 0.")
		return 0, errors.New("Invalid value!")
	}

	return value, nil
}

func calculateProfit(revenue, expenses, taxRate float64) (float64, float64, float64) {
	ebt := revenue - expenses
	eat := ebt * (1 - taxRate/100)
	ratio := ebt / eat
	return ebt, eat, ratio
}

func saveToFile(ebt, eat, ratio float64) {
	os.WriteFile("profit.txt", fmt.Appendf(nil, "Earnings Before Tax: %.2f\nEarnings After Tax: %.2f\nRatio: %.2f\n", ebt, eat, ratio), 0644)
}

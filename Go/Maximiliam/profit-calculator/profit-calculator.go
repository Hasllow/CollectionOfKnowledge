package main

import "fmt"

func main() {
	var revenue, expenses, tax_rate float64

	revenue = getUserValue("Revenue: ")
	expenses = getUserValue("Expenses: ")
	tax_rate = getUserValue("Tax Rate: ")

	ebt, eat, ratio := calculateProfit(revenue, expenses, tax_rate)

	fmt.Printf("Earnings Before Tax: %.2f\n", ebt)
	fmt.Printf("Earnings After Tax: %.2f\n", eat)
	fmt.Printf("Ratio: %.2f\n", ratio)
}

func getUserValue(message string) float64 {
	var value float64
	fmt.Print(message)
	fmt.Scan(&value)
	return value
}

func calculateProfit(revenue, expenses, taxRate float64) (float64, float64, float64) {
	ebt := revenue - expenses
	eat := ebt * (1 - taxRate/100)
	ratio := ebt / eat
	return ebt, eat, ratio
}

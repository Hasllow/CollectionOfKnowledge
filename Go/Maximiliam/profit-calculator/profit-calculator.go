package main

import "fmt"

func main() {
	var revenue, expenses, tax_rate float64

	fmt.Print("Revenue: ")
	fmt.Scan(&revenue)

	fmt.Print("Expenses: ")
	fmt.Scan(&expenses)

	fmt.Print("Tax Rate: ")
	fmt.Scan(&tax_rate)

	ebt := revenue - expenses
	eat := ebt * (1 - tax_rate/100)
	ratio := ebt / eat

	fmt.Printf("Earnings Before Tax: %.2f\n", ebt)
	fmt.Printf("Earnings After Tax: %.2f\n", eat)
	fmt.Printf("Ratio: %.2f\n", ratio)
}

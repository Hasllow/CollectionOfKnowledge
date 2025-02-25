package main

import (
	"fmt"
	"math"
)

func main() {
	const inflationRate = 2.5
	var investmentAmount, years, expectedReturnRate float64

	fmt.Print("Investment Amount: ")
	fmt.Scan(&investmentAmount)

	fmt.Print("Years Amount: ")
	fmt.Scan(&years)

	fmt.Print("Expected Return Rate Amount: ")
	fmt.Scan(&expectedReturnRate)

	futureValue := investmentAmount * math.Pow(1+expectedReturnRate/100, years)
	futureRealValue := futureValue / math.Pow(1+inflationRate/100, years)

	fmt.Printf("The future value of the investment is: %.2f\n", futureValue)

	formattedFV := fmt.Sprintf("Future Value: %.1f\n", futureValue)
	formattedRFV := fmt.Sprintf("Future Real Value: %.1f\n", futureRealValue)

	fmt.Print(formattedFV, formattedRFV)
}

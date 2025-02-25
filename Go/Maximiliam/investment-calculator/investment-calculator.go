package main

import (
	"fmt"
	"math"
)

const inflationRate = 2.5

func main() {
	var investmentAmount, years, expectedReturnRate float64

	investmentAmount = getUserInput("Investment Amount: ")
	years = getUserInput("Years Amount: ")
	expectedReturnRate = getUserInput("Expected Return Rate Amount: ")

	futureValue, futureRealValue := calculateFutureValues(investmentAmount, years, expectedReturnRate)

	formattedFV := fmt.Sprintf("Future Value: %.1f\n", futureValue)
	formattedRFV := fmt.Sprintf("Future Real Value: %.1f\n", futureRealValue)
	fmt.Print(formattedFV, formattedRFV)
}

func calculateFutureValues(investmentAmount, years, expectedReturnRate float64) (fv float64, rfv float64) {
	fv = investmentAmount * math.Pow(1+expectedReturnRate/100, years)
	rfv = fv / math.Pow(1+inflationRate/100, years)

	return fv, rfv
}

func getUserInput(message string) float64 {
	var value float64
	fmt.Print(message)
	fmt.Scan(&value)

	return value
}

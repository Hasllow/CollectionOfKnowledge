package fileops

import (
	"errors"
	"fmt"
	"os"
)

func WriteFloatToFile(value float64, fileName string) {
	valueText := fmt.Sprint(value)
	os.WriteFile(fileName, []byte(valueText), 0644)
	// os.WriteFile(fileName, fmt.Appendf(nil, "%f", value), 0644)
}

func GetFloatFromFile(fileName string) (float64, error) {
	valueText, err := os.ReadFile(fileName)
	if err != nil {
		fmt.Println("Error reading file: ", err)
		return 0.0, errors.New("error reading file")
	}

	var value float64
	fmt.Sscanf(string(valueText), "%f", &value)
	return value, nil
}

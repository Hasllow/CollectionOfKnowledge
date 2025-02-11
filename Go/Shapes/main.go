package main

import (
	"fmt"
)

type square struct {
	sideLength float64
}

type triangle struct {
	base   float64
	height float64
}

type shape interface {
	getArea() float64
}

func main() {
	square := square{sideLength: 5}
	triangle := triangle{base: 2, height: 5}

	fmt.Println(square.getArea())
	fmt.Println(triangle.getArea())
}

func (s square) getArea() float64 {
	return s.sideLength * s.sideLength
}

func (t triangle) getArea() float64 {
	return 0.5 * t.base * t.height
}
// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the volume of a pyramid.
 */
function calculateVolumeOfPyramid() {
  // input
  const lengthOfPyramid = parseFloat(
    document.getElementById("length-of-pyramid").value
  )
  const widthOfPyramid = parseFloat(
    document.getElementById("width-of-pyramid").value
  )
  const heightOfPyramid = parseFloat(
    document.getElementById("height-of-pyramid").value
  )

  // process
  const volumeOfPyramid =
    (lengthOfPyramid * widthOfPyramid * heightOfPyramid) / 3

  // output
  document.getElementById("answer").innerHTML =
    "Volume of your Pyramid is: " + volumeOfPyramid + " mm²"
}

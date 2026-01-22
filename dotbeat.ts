#!/usr/bin/env node
"use strict";

/// The seconds in a single hour.
const SECS_PER_HOUR: number = 60 * 60;

/// The seconds in a single day.
const SECS_PER_DAY: number = SECS_PER_HOUR * 24;

/// Swatch Internet Time is based on the concept of .beats, which are 1,000 equal parts of a mean solar day.
/// This constant is 86.4 seconds, which is the amount of time equal to single .beat.
const BEAT_INTERVAL: number = SECS_PER_DAY / 1000;

const now = (
  ((Date.now() / 1000 + SECS_PER_HOUR) % SECS_PER_DAY) /
  BEAT_INTERVAL
).toFixed(2);

console.log(`\x1b[31m@\x1b[0m${now}`);

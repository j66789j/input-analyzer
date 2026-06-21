# input-analyzer

A browser-based keyboard and mouse event monitor for visualizing user input in real time.

Input Analyzer provides a live view of keyboard states, mouse activity, keystroke history, and event telemetry directly inside the browser. All processing happens locally on the user's device with no external data transfer.

---

## Features

* Real-time `keydown` and `keyup` event tracking
* Physical key detection using `event.code`
* Interactive full-size keyboard visualization
* Keystroke history display
* Event telemetry with timestamps and status indicators
* Mouse click counters (left, middle, right)
* Last input and activity statistics
* Local-only operation with no data collection

---

## Screenshot

![image alt](https://github.com/j66789j/input-analyzer/blob/eced3b8f13774f914e6aff2531e85089c7f8bd78/Screenshot%202026-06-21%20144446.png)

---

## Project Structure

```text
input-analyzer/
├── index.html
├── app.js
└── README.md
```

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/j66789j/input-analyzer.git
```

Open `index.html` directly in your browser, or run the project using VS Code Live Server.

---

## Use Cases

* Learning browser keyboard events
* Testing key combinations
* Understanding `keydown` and `keyup` behavior
* Visualizing physical keyboard layouts
* Monitoring mouse click activity
* Experimenting with event-driven JavaScript

---

## Privacy

Input Analyzer runs entirely on the client side.

* No analytics
* No network requests
* No external services
* No data transmission

All input processing stays on the user's device.

---

## Purpose

This project was created as a learning experiment for browser event handling and input visualization.

It demonstrates how keyboard and mouse events can be captured, processed, and represented visually using JavaScript.

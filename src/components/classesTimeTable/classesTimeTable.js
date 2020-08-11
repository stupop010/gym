import React from "react"

import "./classesTimeTable.scss"

const ClassesTimeTable = () => {
  return (
    <section className="classes">
      <div className="time-table-container">
        <h2>Classes timetable</h2>
        <div style={{ width: "100%", overflowX: "auto" }}>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="class-time">6.00am - 8.00am</td>
                <td className="dark-bg">
                  <h5>CARDIO BLAST</h5>
                  <span>elliott mulindi</span>
                </td>
                <td>
                  <h5>Strength</h5>
                  <span>miles markham</span>
                </td>
                <td className="dark-bg">
                  <h5>Yoga</h5>
                  <span>carolyne lacy</span>
                </td>
                <td>
                  <h5>fitness</h5>
                  <span>elliott mulindi</span>
                </td>
                <td className="blank dark-bg"></td>
                <td>
                  <h5>boxing</h5>
                  <span>stuart doney</span>
                </td>
                <td className="dark-bg">
                  <h5>body building</h5>
                  <span>stuart doney</span>
                </td>
              </tr>
              <tr>
                <td className="class-time">10.00am - 12.00am</td>
                <td className="blank"></td>
                <td className="dark-bg">
                  <h5>fitness</h5>
                  <span>elliott mulindi</span>
                </td>
                <td>
                  <h5>CARDIO BLAST</h5>
                  <span>elliott mulindi</span>
                </td>
                <td className="dark-bg">
                  <h5>Strength</h5>
                  <span>miles markham</span>
                </td>
                <td>
                  <h5>body building</h5>
                  <span>stuart doney</span>
                </td>
                <td className="dark-bg">
                  <h5>karate</h5>
                  <span>susann housum</span>
                </td>
                <td className="blank"></td>
              </tr>
              <tr>
                <td className="class-time">5.00pm - 7.00pm</td>
                <td className="dark-bg">
                  <h5>boxing</h5>
                  <span>stuart doney</span>
                </td>
                <td>
                  <h5>karate</h5>
                  <span>susann housum</span>
                </td>
                <td className="dark-bg">
                  <h5>body building</h5>
                  <span>stuart doney</span>
                </td>
                <td className="blank"></td>
                <td className="dark-bg">
                  <h5>Yoga</h5>
                  <span>carolyne lacy</span>
                </td>
                <td>
                  <h5>CARDIO BLAST</h5>
                  <span>elliott mulindi</span>
                </td>
                <td className="dark-bg">
                  <h5>fitness</h5>
                  <span>elliott mulindi</span>
                </td>
              </tr>
              <tr>
                <td className="class-time">7.00pm - 9.00pm</td>
                <td>
                  <h5>CARDIO BLAST</h5>
                  <span>elliott mulindi</span>
                </td>
                <td className="blank dark-bg"></td>
                <td>
                  <h5>boxing</h5>
                  <span>stuart doney</span>
                </td>
                <td className="dark-bg">
                  <h5>Yoga</h5>
                  <span>carolyne lacy</span>
                </td>
                <td>
                  <h5>karate</h5>
                  <span>susann housum</span>
                </td>
                <td className="dark-bg">
                  <h5>boxing</h5>
                  <span>stuart doney</span>
                </td>
                <td>
                  <h5>body building</h5>
                  <span>stuart doney</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default ClassesTimeTable

import React from 'react';
import Event from './Event';

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event="Popping Yolk 🍳" color="green" location="Yolk Cafe" />
                        <td></td>
                        <td></td>
                        <Event event="Breakfast 🥯" color ="cyan" location="Corey's Bagel Deli" />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <Event event="Starbucks ☕" color="blue" location="Starbucks" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Subway 🚊" color ="pink" location="5th Ave" />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <Event event="River Cruise 🛥️" color ="blue" location="Chicago River" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="The Park ⛲" color="lime" location="Grant Park" />
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event="Meeting 💻" color="pink" location="Amazon HQ" />
                        <td></td>
                        <td></td>
                        <Event event="Gym 🏋️‍♂️" color="green" location="Equinox" />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <Event event="Gym 🏋️‍♂️" color="green" location="Equinox" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <Event event="Fancy Dinner 🎩" color="green" location="Mastro's Steakhouse" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Shopping 🛍️" color="blue" location="Magnificent Mile" />
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;
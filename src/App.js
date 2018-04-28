import React, { Component } from 'react';
import './App.css';

import { ResponsiveLine } from '@nivo/line';

class App extends Component {
  render() {
    return (
        (
              <div >
                <header >
                    <h1 className="App-title">Welcome to React </h1>
                    <i>by using nivo rocks - Line Charts</i>
                </header>
            <div class="App">
            <ResponsiveLine
                data={[
                    {
                        "id": "Pohanka Lexus",

                        "data": [
                            {

                                "x": "CreditCard",
                                "y": 111
                            },
                            {

                                "x": "Cash",
                                "y": 234
                            },
                            {

                                "x": "Cheque",
                                "y": 757
                            }
                        ]
                    },
                    {
                        "id": "Pohanka acura",
                        "data": [
                            {

                                "x": "CreditCard",
                                "y": 627
                            },
                            {

                                "x": "Cash",
                                "y": 387
                            },
                            {

                                "x": "Cheque",
                                "y": 423
                           }
                        ]
                    },
                    {
                        "id": "Pohanka Infinity",
                        "data": [
                            {

                                "x": "CreditCard",
                                "y": 333
                            },
                            {

                                "x": "Cash",
                                "y": 999
                            },
                            {

                                "x": "Cheque",
                                "y": 545
                            }
                        ]
                    }
                  ]
                }
                margin={{
                    "top": 70,
                    "right": 200,
                    "bottom": 120,
                    "left": 60
                }}
                minY="0"
                stacked={false}
                axisBottom={{
                    "orient": "bottom",
                    "tickSize": 10,
                    "tickPadding": 10,
                    "tickRotation": 0,
                    "legend": "Type of CASH",
                    "legendOffset": 70,
                    "legendPosition": "center"
                }}
                axisLeft={{
                    "orient": "left",
                    "tickSize": 10,
                    "tickPadding": 10,
                    "tickRotation": 0,
                    "legend": "COUNT(in Rs )",
                    "legendOffset": -50,
                    "legendPosition": "center"
                }}
                dotSize={10}
                dotColor="inherit:darker(0.5)"
                dotBorderWidth={1}
                dotBorderColor="#ffffff"
                enableDotLabel={true}
                dotLabel="y"
                dotLabelYOffset={-10}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                legends={[
                    {
                        "anchor": "bottom-right",
                        "direction": "column",
                        "translateX": 120,
                        "itemWidth": 80,
                        "itemHeight": 20,
                        "symbolSize": 12,
                        "symbolShape": "square"
                    }
                ]}
            />
            </div>
</div>
        )
    );
  }
}

export default App;

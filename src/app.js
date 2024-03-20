import React, { useState, useEffect } from "react";
import Countdown from "./countdown.js";
import YearToggle from "./yeartoggle.js";
import { Select, MenuItem } from "@mui/material";

const calculateORD = (batch, yearer) => {
  const baseYear = 2017; // 2018 is first ORD year for CyberNSF
  const yearer_increment = yearer ? 1 : 0; // 3 year, 4 year
  const ord_day = batch % 2 === 0 ? 5 : 31;
  const ord_month = batch % 2 === 0 ? "Apr" : "Jul";
  const ord_year = baseYear + batch + yearer_increment;

  return `${ord_day} ${ord_month} ${ord_year}`;
};

const App = () => {
  const [switchContract, setContract] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(7);
  const [ordDate, setOrdDate] = useState("");

  useEffect(() => {
    const newOrdDate = calculateORD(selectedBatch, switchContract);
    setOrdDate(newOrdDate);
  }, [selectedBatch, switchContract]);

  const handleBatchChange = (event) => {
    setSelectedBatch(parseInt(event.target.value));
  };

  return (
    <div>
      <div>
        <h1>
          Days till Batch {selectedBatch} ({switchContract ? 4 : 3} yearers) ORD
        </h1>
      </div>
      <Countdown date={ordDate} />
      <form>
        <label>
          Batch:
          <Select
            value={selectedBatch}
            onChange={handleBatchChange}
            inputProps={{
              "aria-label": "Without label",
            }}
          >
            {[7, 8, 9, 10].map((batch) => (
              <MenuItem key={batch} value={batch}>
                {batch}
              </MenuItem>
            ))}
          </Select>
        </label>
        <YearToggle switchContract={switchContract} setContract={setContract} />
      </form>
    </div>
  );
};

export default App;

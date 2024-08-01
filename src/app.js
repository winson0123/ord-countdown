import React, { useState, useEffect } from "react";
import Countdown from "./countdown.js";
import YearToggle from "./yeartoggle.js";
import { Select, MenuItem } from "@mui/material";

const calculateORD = (batch, yearer) => {
  const baseYear = 2020; // Enlistment year for B7
  const batch_increment = Math.floor(batch / 2) + 1 // 2 batches per year
  const yearer_increment = yearer ? 1 : 0; // 3 year, 4 year
  const ord_day = batch % 2 === 0 ? 5 : 31;
  const ord_month = batch % 2 === 0 ? "Apr" : "Jul";
  const ord_year = baseYear + batch_increment + yearer_increment;

  return `${ord_day} ${ord_month} ${ord_year}`;
};

const App = () => {
  const [switchContract, setContract] = useState(true);
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
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold uppercase tracking-wide">
          Days till Batch {selectedBatch} ({switchContract ? 4 : 3} yearers) ORD
        </h1>
      </div>
      <Countdown date={ordDate} />
      <div>
        <form className="my-2 flex items-center justify-center space-x-4">
          <div className="space-x-2">
            <label>Batch:</label>
            <Select value={selectedBatch} onChange={handleBatchChange}>
              {[7, 8, 9, 10, 11].map((batch) => (
                <MenuItem key={batch} value={batch}>
                  {batch}
                </MenuItem>
              ))}
            </Select>
          </div>
          <YearToggle
            switchContract={switchContract}
            setContract={setContract}
          />
        </form>
      </div>
    </div>
  );
};

export default App;

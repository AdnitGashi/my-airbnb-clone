import React, { useState } from "react";
import LeftHeader from "./LeftHeader";
import MiddleHeader from "./MiddleHeader";
import RightHeader from "./RightHeader";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { UsersIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

type DateProps = {
  endDate: Date;
  startDate: Date;
  selection: any;
};
type Props = {
  placeHolder: string;
};

const Header = ({ placeHolder }: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRanges = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const onSearchInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(value);
  };

  const handleSelect = ({ selection: { endDate, startDate } }: DateProps) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleNoOfGuests = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setNoOfGuests(parseInt(value));
  };

  const resetInput = () => {
    setSearchInput("");
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toLocaleString(),
        endDate: endDate.toLocaleString(),
        noOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <LeftHeader />
      <MiddleHeader
        searchInput={searchInput}
        onSearchInputChange={onSearchInputChange}
        placeHolder={placeHolder}
      />
      <RightHeader />
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-0">
          <DateRangePicker
            ranges={[selectionRanges]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl pl-2 flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={noOfGuests}
              onChange={handleNoOfGuests}
              min={1}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gra-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-400 " onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

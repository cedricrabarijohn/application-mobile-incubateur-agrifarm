import { EngineDataTableRowType } from "../../../components/engine/engine-data-table/row/EngineDataTableRowType";
import { SingleEngineDetailsType } from "../../../components/engine/engine-details/EngineDetailsType";
const engineDetailsDatasMock: Array<SingleEngineDetailsType> = [
  {
    notation: "id",
    definition: "identification de la saisie",
  },
  {
    notation: "T°inc",
    definition: "Température de l'incubateur",
  },
  {
    notation: "H°",
    definition: "Humidité",
  },
  {
    notation: "/",
    definition: "Retournement",
  },
  {
    notation: "A°",
    definition: "Aération",
  },
  {
    notation: "T°s",
    definition: "Température de la salle",
  },
];

const tableHeadersMock: Array<string> = [
  "id",
  "T°inc",
  "H°",
  "/",
  "A°",
  "T°s",
  "Date",
  "Heure"
];
const tableRowsMock: Array<EngineDataTableRowType> = [];
for (let i = 1; i <= 10; i++) {
  tableRowsMock.push({
    columns: [
      {
        value: i,
      },
      {
        value: "28",
        suffix: "°F",
      },
      {
        value: "26",
      },
      {
        value: "1",
      },
      {
        value: "82",
        suffix: "%",
      },
      {
        value: "27",
        suffix: "°C",
      },
      {
        value:`2023-01-19`
      },
      {
        value:`06:27:16`
      }
    ],
  });
}
export const engineDatasMock = {
  engineDetailsDatasMock: engineDetailsDatasMock,
  tableHeadersMock: tableHeadersMock,
  tableRowsMock: tableRowsMock,
};

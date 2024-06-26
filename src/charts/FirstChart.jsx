import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import LineGraph from "./LineGraph";
import PieChart from "./PieCharts";

Chart.register(
  ArcElement,
  LineElement,
  PointElement,
  BarElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
);

export const FirstChart = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <BarChart />
        </Col>
        <Col>
          <DoughnutChart />
        </Col>
        <Col>
          <LineGraph />
        </Col>
        <Col>
          <PieChart />
        </Col>
      </Row>
    </Container>
  );
};

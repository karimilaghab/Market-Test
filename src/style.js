import styled from "styled-components";

export const StyleWrapper = styled.section`
  .title {
    font-size: 24px;
    color: #12134d;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .table {
    background-color: #f9f9fb;
    padding: 30px;
    border-radius: 30px;
    width: 75%;
    margin: 0 auto;
    td {
      text-align: left;
      padding: 10px;
    }
    th {
      font-size: 20px;
      font-weight: bold;
      padding: 15px 10px;
      text-align: left;
      color: #030449;
    }
  }
  .voteBTN {
    all: unset;
    height: 40px;
    width: 100px;
    background-color: #5f30e2;
    margin-right: 30px;
    color: white;
    text-align: center;
    border-radius: 300px;
    cursor: pointer;
  }
  .allCountWrapper {
    background-color: #25cc88;
    color: white;
    height: 50px;
    width: 190px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    border-radius: 30px;
  }

  .allCount {
    color: black;
    font-weight: bold;
    font-size: 26px;
    padding: 10px;
  }
`;

export const StyleLoading = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 20%;
`;

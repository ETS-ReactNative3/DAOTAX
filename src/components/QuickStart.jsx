import { Card, Timeline, Typography } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart() {
  const { isAuthenticated } = useMoralis();

  // const isInchDex = useMemo(
  //   () => (Moralis.Plugins?.oneInch ? true : false),
  //   [Moralis.Plugins?.oneInch],
  // );

  return (
    <div>
      <Card
        style={styles.card}
        title={
          <>
            <Text strong>DAOTAX ~ Simple. Anonymous. Secure.</Text>
          </>
        }
      >
        <Timeline style={styles.timeline}>
          <Timeline.Item>
            <Text style={styles.text}>
              DAOTAX doesn't store any personal info. Your wallet is not linked
              to your identity.
            </Text>
          </Timeline.Item>

          <Timeline.Item>
            <Text style={styles.text}>
              Simply follow the steps below to generate the K-1s for your DAO
            </Text>
          </Timeline.Item>
        </Timeline>
      </Card>
      <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <Card
          style={styles.card}
          title={
            <>
              📝 <Text strong>Register/Join Your DAO</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item>
              <Text delete={isAuthenticated} style={styles.text}>
                Log in with your wallet that holds the NFT
              </Text>
            </Timeline.Item>

            <Timeline.Item>
              <Text style={styles.text}>
                Go to
                <NavLink to="/nftBalance"> My NFTs</NavLink>
              </Text>
            </Timeline.Item>

            <Timeline.Item>
              <Text style={styles.text}>
                If the token has already been registered as a DAO you can click
                Join DAO
              </Text>
            </Timeline.Item>

            <Timeline.Item>
              <Text style={styles.text}>
                Otherwise you must register the DAO by clicking Register DAO
                under the token
              </Text>
            </Timeline.Item>

            <Timeline.Item dot="✅">
              <Text style={styles.text}>
                Congratulations! Now your DAO will appear under {""}
                <NavLink to="/MyDaos"> My DAOs</NavLink>
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        <div>
          <Card
            style={styles.card}
            title={
              <>
                🤑 <Text strong>Report Earnings</Text>
              </>
            }
          >
            <Timeline mode="left" style={styles.timeline}>
              <Timeline.Item>
                <Text style={styles.text}>
                  Go to
                  <NavLink to="/MyDaos"> My DAOs</NavLink>
                </Text>
              </Timeline.Item>
              <Timeline.Item>
                <Text style={styles.text}>
                  Only the member who registered the DAO can report earnings at
                  the moment
                </Text>
              </Timeline.Item>
              <Timeline.Item>
                <Text style={styles.text}>
                  Click the DAO you would like to report earnings for
                </Text>
              </Timeline.Item>
              <Timeline.Item style={styles.text}>
                <Text>Now click Report Earnings and fill out the form</Text>
              </Timeline.Item>
              <Timeline.Item dot="✅" style={styles.text}>
                <Text>Congrats! You have reported earnings for you DAO!</Text>
              </Timeline.Item>
            </Timeline>
          </Card>
          <Card
            style={{ marginTop: "10px", ...styles.card }}
            title={
              <>
                🌟 <Text strong>Complete Your K-1</Text>
              </>
            }
          >
            <Timeline mode="left" style={styles.timeline}>
              <Timeline.Item>
                <Text style={styles.text}>
                  Go to
                  <NavLink to="/MyDaos"> My DAOs</NavLink>
                </Text>
              </Timeline.Item>
              <Timeline.Item>
                <Text style={styles.text}>
                  Once the earnings have been reported, click complete K-1 and
                  fill out the form
                </Text>
              </Timeline.Item>
              <Timeline.Item dot="✅">
                <Text style={styles.text}>
                  Congrats! Your K-1 should be downloaded!
                </Text>
              </Timeline.Item>
            </Timeline>
          </Card>
        </div>
      </div>
    </div>
  );
}

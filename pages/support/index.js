import React from "react";
import Section1 from "../../components/support/Section1";
import Section2 from "../../components/support/Section2";
import Section3 from "../../components/support/Section3";
import AllCtx from "../../util-functions/allCtx";


function Index(props) {
  const {
    supportTitle,
    supportSubtitle,
    supportBgImage,
    customerCareNumber,
    newTicketTitle,
    newTicketSubtitle,
    ticketStatusTitle,
    ticketStatusSubtitle,
  } = props;

  return (
    <div className="">
      <Section1
        supportTitle={supportTitle}
        supportSubtitle={supportSubtitle}
        supportBgImage={supportBgImage}
        customerCareNumber={customerCareNumber}
      />
      <Section2
        newTicketTitle={newTicketTitle}
        newTicketSubtitle={newTicketSubtitle}
      />
      <Section3
        ticketStatusTitle={ticketStatusTitle}
        ticketStatusSubtitle={ticketStatusSubtitle}
      />
    </div>
  );
}

export async function getStaticProps() {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/supportpage`
  );
  const data = await response.json();

  const supportTitle = data.supportTitle;
  const supportSubtitle = data.supportSubtitle;
  const supportBgImage = data.supportBgImage;
  const customerCareNumber = data.csNumber;
  const newTicketTitle = data.newTicketTitle;
  const newTicketSubtitle = data.newTicketSubtitle;
  const ticketStatusTitle = data.statusTicketTitle;
  const ticketStatusSubtitle = data.statusTicketSubtitle;

  return {
    props: {
      supportTitle,
      supportSubtitle,
      supportBgImage,
      customerCareNumber,
      newTicketTitle,
      newTicketSubtitle,
      ticketStatusTitle,
      ticketStatusSubtitle,
    },
    revalidate: 300,
  };
}

export default Index;

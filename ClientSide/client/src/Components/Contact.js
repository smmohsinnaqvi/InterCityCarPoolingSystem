import { Card, Col, Row } from "antd";

export default function Contact()
{
    return (
        <div className="contact">
            <div className="info">

            <Row gutter={16}>
                <Col span={8} >
                    <Card title="S M Mohsin Naqvi" style={{margin:'20px'}}>
                        <p><b>Email : </b>mohsinnaqvi.mn02@gmail.com</p>
                        <p><b>Phone : </b>+91 8858224400</p>
                        <p><b>LinkedIn :</b><a href="www.linkedin.com/in/mohsin-naqvi-7826b913a"> www.linkedin.com/in/mohsin-naqvi-7826b913a </a></p>
                    </Card>

                    <Card title="Madhekar Nikhil Sanjay" style={{margin:'20px'}}>
                        <p><b>Email : </b></p>
                        <p><b>Phone : </b>+91 8806131273</p>
                        <p><b>LinkedIn :</b></p>
                    </Card>
                </Col>
                <Col span={8}>

                    <Card title="Tarun Rathore" style={{margin:'20px'}}>
                        <p><b>Email : </b></p>
                        <p><b>Phone : </b>+91 7225-074716</p>
                        <p><b>LinkedIn :</b></p>
                    </Card>

                    <Card title="Mahesh Annasaheb Bhabad" style={{margin:'20px'}}>
                        <p><b>Email : </b>mahibhabad321@gmail.com</p>
                        <p><b>Phone : </b>+91 9689372672</p>
                        <p><b>LinkedIn :</b></p>
                    </Card>
                </Col>
            </Row>
            </div>

        </div>
    )
}
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs';
import './app.css'
import {Select} from 'antd'
export default function App() {
    return (
        <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
                <div>
                    <Select
                    style={{
                        width:'10rem'
                    }}
                    options={[
                        {
                            label: '测试1',
                            value: 'T1'
                        },
                    ]}
                    ></Select>
                </div>
            </StyleProvider>
    )
}

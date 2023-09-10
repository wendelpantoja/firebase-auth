import { Spin, ConfigProvider } from 'antd';
import { ContainerSpin } from './styles';
export function HandleSpin() {
    return (
        <ContainerSpin>
            <ConfigProvider
                theme={{
                    token: {
                      colorPrimary: '#8C8C8C',
                      borderRadius: 2,
                      colorBgContainer: '#f6ffed',
                    },
                  }}
            >
                <Spin />
            </ConfigProvider>
        </ContainerSpin>
    )
}
import { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import ProtectedRoute from "../components/auth/protected-route";

export default function Address(){
    const [dynamicMapComponent, setDynamicMapComponent] = useState<any>(null);
        
    useEffect(() => {
        if (typeof window !== "undefined") {
        import("../components/map/Map").then((module) => {
            setDynamicMapComponent(module.default);
        });
        }
    }, []);
    return (
        <ProtectedRoute authenticated={false}>
            <Layout section="Address">
                <div id="address-section">
                    <div>
                        <address>Edificio ..., Oficina... Distrito Capital, Venezuela</address>
                        <div>
                            {dynamicMapComponent}
                        </div>
                    </div>
                </div>
            </Layout>
        </ProtectedRoute>
    );
}
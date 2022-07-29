
import { SharedPropertyTree } from "@fluid-experimental/property-dds";
import { v4 as uuid } from "uuid"
import * as assert from 'assert';
import { SimpleWorkspace, createSimpleWorkspace, ReadyLogger } from "../workspace";

const DEMO_PAYLOAD = "large & complex payload";

describe("Local map test", function () {

    let workspace: SimpleWorkspace

    const sharedWorkspace = async (): Promise<SimpleWorkspace> => {
        console.log(`Initializing remote workspace`)
        const workspace = await createSimpleWorkspace("e89e36f3-0d9c-43a2-9a71-24eef439e74f", SharedPropertyTree, new ReadyLogger());
        return workspace;
    }

    const cleanUp = () => {
    }

    const dispose = () => {
        console.log(`Disposing workspace ${workspace.containerId}"`);
        workspace.dispose();
    }

    afterAll(() => {
        cleanUp();
        dispose();
    });

    test("Retrieve test", async () => {
        workspace = await sharedWorkspace()
        const container = workspace.container;
        console.log(`Container is ${container}`)
    });

});
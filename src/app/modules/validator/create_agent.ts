import * as joi from 'joi';
import { createAgentSchema } from "./schemas/create_agent_schema";

export function validateCreateAgent(agent) {
    const result = joi.validate(agent, createAgentSchema);

    if(result.error) {
        throw new Error('Invalid agent');
    }
}
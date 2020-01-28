import * as contracts from '@aarnott/cloudbuild-task-contracts';
import { Logger } from '@aarnott/cloudbuild-task-contracts';

export class Outputs implements contracts.Outputs {
	/** The variables that have been set. */
	public readonly variables: { [key: string]: string } = {};

	constructor(private readonly log: Logger) {
	}

	setVariable(name: string, value: string): void {
		this.log.debug(`Variable set: ${name}=${value}`);
		this.variables[name] = value;
	}
}

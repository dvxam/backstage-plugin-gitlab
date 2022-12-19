import { createApiRef } from '@backstage/core-plugin-api';
import {
    ContributorData,
    MergeRequest,
    PipelineObject,
    IssueObject,
    FileOwnership,
    UserDetail,
} from '../components/types';

export interface PipelineSummary {
    getPipelinesData: PipelineObject[];
}

export interface ContributorsSummary {
    getContributorsData: ContributorData[];
}

export interface MergeRequestsSummary {
    getMergeRequestsData: MergeRequest[];
}

export interface MergeRequestsStatusSummary {
    getMergeRequestsStatusData: MergeRequest[];
}

export interface LanguagesSummary {
    getLanguagesData: any;
}

export interface IssuesSummary {
    getIssuesData: IssueObject[];
}

export interface CodeOwners {
    getCodeOwners: FileOwnership[];
}

export const GitlabCIApiRef = createApiRef<GitlabCIApi>({
    id: 'plugin.gitlabci.service',
});

export type GitlabCIApi = {
    getPipelineSummary(projectID: string): Promise<PipelineSummary | undefined>;
    getContributorsSummary(
        projectID: string
    ): Promise<ContributorsSummary | undefined>;
    getMergeRequestsSummary(
        projectID: string
    ): Promise<MergeRequestsSummary | undefined>;
    getMergeRequestsStatusSummary(
        projectID: string,
        count: number
    ): Promise<MergeRequestsStatusSummary | undefined>;
    getProjectName(projectID: string): Promise<string | undefined>;
    getLanguagesSummary(
        projectID: string
    ): Promise<LanguagesSummary | undefined>;
    retryPipelineBuild(
        projectID: string,
        pipelineID: string
    ): Promise<Record<string, unknown> | undefined>;
    getProjectDetails(
        projectSlug: string
    ): Promise<Record<string, unknown> | undefined>;
    getIssuesSummary(projectID: string): Promise<IssuesSummary | undefined>;
    getCodeOwners(
        projectID?: string,
        branch?: string,
        filePath?: string
    ): Promise<CodeOwners>;

    getUserDetail(username: string): Promise<UserDetail>;
};

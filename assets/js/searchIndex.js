
var camelCaseTokenizer = function (obj) {
    var previous = '';
    return obj.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
        var current = cur.toLowerCase();
        if(acc.length === 0) {
            previous = current;
            return acc.concat(current);
        }
        previous = previous.concat(current);
        return acc.concat([current, previous]);
    }, []);
}
lunr.tokenizer.registerFunction(camelCaseTokenizer, 'camelCaseTokenizer')
var searchModule = function() {
    var idMap = [];
    function y(e) { 
        idMap.push(e); 
    }
    var idx = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('description', { boost: 5 });
        this.field('tags', { boost: 50 });
        this.ref('id');
        this.tokenizer(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
    });
    function a(e) { 
        idx.add(e); 
    }

    a({
        id:0,
        title:"GitSignature",
        content:"GitSignature",
        description:'',
        tags:''
    });

    a({
        id:1,
        title:"EmailSettings",
        content:"EmailSettings",
        description:'',
        tags:''
    });

    a({
        id:2,
        title:"NuGetUpdater",
        content:"NuGetUpdater",
        description:'',
        tags:''
    });

    a({
        id:3,
        title:"NpmRunScriptAliases",
        content:"NpmRunScriptAliases",
        description:'',
        tags:''
    });

    a({
        id:4,
        title:"TfxExtensionPublishSettings",
        content:"TfxExtensionPublishSettings",
        description:'',
        tags:''
    });

    a({
        id:5,
        title:"CurlDownloadSettings",
        content:"CurlDownloadSettings",
        description:'',
        tags:''
    });

    a({
        id:6,
        title:"AppVeyorMessageCategoryType",
        content:"AppVeyorMessageCategoryType",
        description:'',
        tags:''
    });

    a({
        id:7,
        title:"NpmPackSettings",
        content:"NpmPackSettings",
        description:'',
        tags:''
    });

    a({
        id:8,
        title:"IProcessRunner",
        content:"IProcessRunner",
        description:'',
        tags:''
    });

    a({
        id:9,
        title:"FakeConsole",
        content:"FakeConsole",
        description:'',
        tags:''
    });

    a({
        id:10,
        title:"SqlPackageDeployReportSettings",
        content:"SqlPackageDeployReportSettings",
        description:'',
        tags:''
    });

    a({
        id:11,
        title:"InspectCodeRunner",
        content:"InspectCodeRunner",
        description:'',
        tags:''
    });

    a({
        id:12,
        title:"StorytellerFlag",
        content:"StorytellerFlag",
        description:'',
        tags:''
    });

    a({
        id:13,
        title:"LoadBalancingSettings",
        content:"LoadBalancingSettings",
        description:'',
        tags:''
    });

    a({
        id:14,
        title:"IScriptConventions",
        content:"IScriptConventions",
        description:'',
        tags:''
    });

    a({
        id:15,
        title:"SyncSettings",
        content:"SyncSettings",
        description:'',
        tags:''
    });

    a({
        id:16,
        title:"DbSqliteProvider",
        content:"DbSqliteProvider",
        description:'',
        tags:''
    });

    a({
        id:17,
        title:"JsonExtensions",
        content:"JsonExtensions",
        description:'',
        tags:''
    });

    a({
        id:18,
        title:"GitReleaseNotesAliases",
        content:"GitReleaseNotesAliases",
        description:'',
        tags:''
    });

    a({
        id:19,
        title:"GitReleaseManagerPublishSettings",
        content:"GitReleaseManagerPublishSettings",
        description:'',
        tags:''
    });

    a({
        id:20,
        title:"VagrantDockerRunner",
        content:"VagrantDockerRunner",
        description:'',
        tags:''
    });

    a({
        id:21,
        title:"SonarEndSettings",
        content:"SonarEndSettings",
        description:'',
        tags:''
    });

    a({
        id:22,
        title:"SetAclResourceType",
        content:"SetAclResourceType",
        description:'',
        tags:''
    });

    a({
        id:23,
        title:"BuildScriptHost",
        content:"BuildScriptHost",
        description:'',
        tags:''
    });

    a({
        id:24,
        title:"TerraformEnvListSettings",
        content:"TerraformEnvListSettings",
        description:'',
        tags:''
    });

    a({
        id:25,
        title:"DotNetCoreEfMigrationRemover",
        content:"DotNetCoreEfMigrationRemover",
        description:'',
        tags:''
    });

    a({
        id:26,
        title:"GitReleaseManagerCloseMilestoneSettings",
        content:"GitReleaseManagerCloseMilestoneSettings",
        description:'',
        tags:''
    });

    a({
        id:27,
        title:"SecretArgument",
        content:"SecretArgument",
        description:'',
        tags:''
    });

    a({
        id:28,
        title:"IDeployManager",
        content:"IDeployManager",
        description:'',
        tags:''
    });

    a({
        id:29,
        title:"AssemblyInfoParser",
        content:"AssemblyInfoParser",
        description:'',
        tags:''
    });

    a({
        id:30,
        title:"OpenCoverSettingsExtensions",
        content:"OpenCoverSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:31,
        title:"ProjectReference",
        content:"ProjectReference",
        description:'',
        tags:''
    });

    a({
        id:32,
        title:"JsonEncoder",
        content:"JsonEncoder",
        description:'',
        tags:''
    });

    a({
        id:33,
        title:"JenkinsProvider",
        content:"JenkinsProvider",
        description:'',
        tags:''
    });

    a({
        id:34,
        title:"DockerNetworkDisconnectSettings",
        content:"DockerNetworkDisconnectSettings",
        description:'',
        tags:''
    });

    a({
        id:35,
        title:"HockeyAppUploadResult",
        content:"HockeyAppUploadResult",
        description:'',
        tags:''
    });

    a({
        id:36,
        title:"NpmPublishAccess",
        content:"NpmPublishAccess",
        description:'',
        tags:''
    });

    a({
        id:37,
        title:"CodecovAliases",
        content:"CodecovAliases",
        description:'',
        tags:''
    });

    a({
        id:38,
        title:"FileStatus",
        content:"FileStatus",
        description:'',
        tags:''
    });

    a({
        id:39,
        title:"DotNetCoreAliases",
        content:"DotNetCoreAliases",
        description:'',
        tags:''
    });

    a({
        id:40,
        title:"MobileCenterDistributeGroupsCreateSettings",
        content:"MobileCenterDistributeGroupsCreateSettings",
        description:'',
        tags:''
    });

    a({
        id:41,
        title:"IScriptAnalyzer",
        content:"IScriptAnalyzer",
        description:'',
        tags:''
    });

    a({
        id:42,
        title:"Settings",
        content:"Settings",
        description:'',
        tags:''
    });

    a({
        id:43,
        title:"GoCDInfo",
        content:"GoCDInfo",
        description:'',
        tags:''
    });

    a({
        id:44,
        title:"IEfMigrator",
        content:"IEfMigrator",
        description:'',
        tags:''
    });

    a({
        id:45,
        title:"BaseSqlQueryRepository",
        content:"BaseSqlQueryRepository",
        description:'',
        tags:''
    });

    a({
        id:46,
        title:"MobileCenterCrashesUploadMissingSymbolsSettings",
        content:"MobileCenterCrashesUploadMissingSymbolsSettings",
        description:'',
        tags:''
    });

    a({
        id:47,
        title:"TaskSetupEventArgs",
        content:"TaskSetupEventArgs",
        description:'',
        tags:''
    });

    a({
        id:48,
        title:"ReportGeneratorRunner",
        content:"ReportGeneratorRunner",
        description:'',
        tags:''
    });

    a({
        id:49,
        title:"ConfigurationVersion",
        content:"ConfigurationVersion",
        description:'',
        tags:''
    });

    a({
        id:50,
        title:"PocoJsonSerializerStrategy",
        content:"PocoJsonSerializerStrategy",
        description:'',
        tags:''
    });

    a({
        id:51,
        title:"DotNetBuildSettingsExtensions",
        content:"DotNetBuildSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:52,
        title:"ActiveDirectoryBase",
        content:"ActiveDirectoryBase",
        description:'',
        tags:''
    });

    a({
        id:53,
        title:"GenericPlinkRunner",
        content:"GenericPlinkRunner",
        description:'',
        tags:''
    });

    a({
        id:54,
        title:"TFBuildTaskStatus",
        content:"TFBuildTaskStatus",
        description:'',
        tags:''
    });

    a({
        id:55,
        title:"ITransifexRunnerCommands",
        content:"ITransifexRunnerCommands",
        description:'',
        tags:''
    });

    a({
        id:56,
        title:"DeployProxySettings",
        content:"DeployProxySettings",
        description:'',
        tags:''
    });

    a({
        id:57,
        title:"BumpySettings",
        content:"BumpySettings",
        description:'',
        tags:''
    });

    a({
        id:58,
        title:"TestParsing",
        content:"TestParsing",
        description:'',
        tags:''
    });

    a({
        id:59,
        title:"CakeRunner",
        content:"CakeRunner",
        description:'',
        tags:''
    });

    a({
        id:60,
        title:"RegValueProvider",
        content:"RegValueProvider",
        description:'',
        tags:''
    });

    a({
        id:61,
        title:"MobileCenterOrgsCollaboratorsUpdateSettings",
        content:"MobileCenterOrgsCollaboratorsUpdateSettings",
        description:'',
        tags:''
    });

    a({
        id:62,
        title:"MicrosoftTeamsMessagePotentialAction",
        content:"MicrosoftTeamsMessagePotentialAction",
        description:'',
        tags:''
    });

    a({
        id:63,
        title:"NUnitAliases",
        content:"NUnitAliases",
        description:'',
        tags:''
    });

    a({
        id:64,
        title:"MSBuildArgumentBuilderExtensions",
        content:"MSBuildArgumentBuilderExtensions",
        description:'',
        tags:''
    });

    a({
        id:65,
        title:"JUnitReporterSettings",
        content:"JUnitReporterSettings",
        description:'',
        tags:''
    });

    a({
        id:66,
        title:"Issue",
        content:"Issue",
        description:'',
        tags:''
    });

    a({
        id:67,
        title:"OctopusPackSettings",
        content:"OctopusPackSettings",
        description:'',
        tags:''
    });

    a({
        id:68,
        title:"DupFinderAliases",
        content:"DupFinderAliases",
        description:'',
        tags:''
    });

    a({
        id:69,
        title:"DotNetCoreEfMigrationRemoveSettings",
        content:"DotNetCoreEfMigrationRemoveSettings",
        description:'',
        tags:''
    });

    a({
        id:70,
        title:"MSTestSettings",
        content:"MSTestSettings",
        description:'',
        tags:''
    });

    a({
        id:71,
        title:"OctopusDeployReleaseDeployer",
        content:"OctopusDeployReleaseDeployer",
        description:'',
        tags:''
    });

    a({
        id:72,
        title:"BumpyAliases",
        content:"BumpyAliases",
        description:'',
        tags:''
    });

    a({
        id:73,
        title:"Issue",
        content:"Issue",
        description:'',
        tags:''
    });

    a({
        id:74,
        title:"TransifexRunnerAliases",
        content:"TransifexRunnerAliases",
        description:'',
        tags:''
    });

    a({
        id:75,
        title:"AppPoolPipelineMode",
        content:"AppPoolPipelineMode",
        description:'',
        tags:''
    });

    a({
        id:76,
        title:"GemPushSettings",
        content:"GemPushSettings",
        description:'',
        tags:''
    });

    a({
        id:77,
        title:"DotCoverMerger",
        content:"DotCoverMerger",
        description:'',
        tags:''
    });

    a({
        id:78,
        title:"OctoVariableImportAlias",
        content:"OctoVariableImportAlias",
        description:'',
        tags:''
    });

    a({
        id:79,
        title:"VersionReaderAliases",
        content:"VersionReaderAliases",
        description:'',
        tags:''
    });

    a({
        id:80,
        title:"DockerRegistryLoginSettings",
        content:"DockerRegistryLoginSettings",
        description:'',
        tags:''
    });

    a({
        id:81,
        title:"CsvHelpers",
        content:"CsvHelpers",
        description:'',
        tags:''
    });

    a({
        id:82,
        title:"YarnRunner",
        content:"YarnRunner",
        description:'',
        tags:''
    });

    a({
        id:83,
        title:"CakeEnvironmentExtensions",
        content:"CakeEnvironmentExtensions",
        description:'',
        tags:''
    });

    a({
        id:84,
        title:"BitriseRepositoryInfo",
        content:"BitriseRepositoryInfo",
        description:'',
        tags:''
    });

    a({
        id:85,
        title:"GoCDHistoryInfo",
        content:"GoCDHistoryInfo",
        description:'',
        tags:''
    });

    a({
        id:86,
        title:"PlinkTool",
        content:"PlinkTool",
        description:'',
        tags:''
    });

    a({
        id:87,
        title:"SqlQuerySettings",
        content:"SqlQuerySettings",
        description:'',
        tags:''
    });

    a({
        id:88,
        title:"FtpSettings",
        content:"FtpSettings",
        description:'',
        tags:''
    });

    a({
        id:89,
        title:"LoadBalancingManager",
        content:"LoadBalancingManager",
        description:'',
        tags:''
    });

    a({
        id:90,
        title:"ChocolateyPushSettings",
        content:"ChocolateyPushSettings",
        description:'',
        tags:''
    });

    a({
        id:91,
        title:"XUnitRunner",
        content:"XUnitRunner",
        description:'',
        tags:''
    });

    a({
        id:92,
        title:"ProcessSettings",
        content:"ProcessSettings",
        description:'',
        tags:''
    });

    a({
        id:93,
        title:"IGeneratorSettings",
        content:"IGeneratorSettings",
        description:'',
        tags:''
    });

    a({
        id:94,
        title:"ChocolateyPacker",
        content:"ChocolateyPacker",
        description:'',
        tags:''
    });

    a({
        id:95,
        title:"NSwagAliases",
        content:"NSwagAliases",
        description:'',
        tags:''
    });

    a({
        id:96,
        title:"IGoCDProvider",
        content:"IGoCDProvider",
        description:'',
        tags:''
    });

    a({
        id:97,
        title:"XCodeSettings",
        content:"XCodeSettings",
        description:'',
        tags:''
    });

    a({
        id:98,
        title:"TestRuntime",
        content:"TestRuntime",
        description:'',
        tags:''
    });

    a({
        id:99,
        title:"LogAction",
        content:"LogAction",
        description:'',
        tags:''
    });

    a({
        id:100,
        title:"ScriptyRunner",
        content:"ScriptyRunner",
        description:'',
        tags:''
    });

    a({
        id:101,
        title:"DocFxBuildAliases",
        content:"DocFxBuildAliases",
        description:'',
        tags:''
    });

    a({
        id:102,
        title:"MobileCenterAnalyticsLogFlowSettings",
        content:"MobileCenterAnalyticsLogFlowSettings",
        description:'',
        tags:''
    });

    a({
        id:103,
        title:"KeePassEntryCriteria",
        content:"KeePassEntryCriteria",
        description:'',
        tags:''
    });

    a({
        id:104,
        title:"TfsPullRequestSystemAliases",
        content:"TfsPullRequestSystemAliases",
        description:'',
        tags:''
    });

    a({
        id:105,
        title:"ProcessArgumentBuilderExtensions",
        content:"ProcessArgumentBuilderExtensions",
        description:'',
        tags:''
    });

    a({
        id:106,
        title:"KeePassAlias",
        content:"KeePassAlias",
        description:'',
        tags:''
    });

    a({
        id:107,
        title:"UserSettings",
        content:"UserSettings",
        description:'',
        tags:''
    });

    a({
        id:108,
        title:"CakeOptions",
        content:"CakeOptions",
        description:'',
        tags:''
    });

    a({
        id:109,
        title:"GitFilesProvider",
        content:"GitFilesProvider",
        description:'',
        tags:''
    });

    a({
        id:110,
        title:"RecycleMode",
        content:"RecycleMode",
        description:'',
        tags:''
    });

    a({
        id:111,
        title:"MobileCenterTestRunManifestSettings",
        content:"MobileCenterTestRunManifestSettings",
        description:'',
        tags:''
    });

    a({
        id:112,
        title:"TfxOutputType",
        content:"TfxOutputType",
        description:'',
        tags:''
    });

    a({
        id:113,
        title:"FluentMigratorAliases",
        content:"FluentMigratorAliases",
        description:'',
        tags:''
    });

    a({
        id:114,
        title:"DotNetCoreVSTestSettings",
        content:"DotNetCoreVSTestSettings",
        description:'',
        tags:''
    });

    a({
        id:115,
        title:"SendGridProvider",
        content:"SendGridProvider",
        description:'',
        tags:''
    });

    a({
        id:116,
        title:"HttpClientAliases",
        content:"HttpClientAliases",
        description:'',
        tags:''
    });

    a({
        id:117,
        title:"GemBuildSettings",
        content:"GemBuildSettings",
        description:'',
        tags:''
    });

    a({
        id:118,
        title:"NuGetInstaller",
        content:"NuGetInstaller",
        description:'',
        tags:''
    });

    a({
        id:119,
        title:"TargetKind",
        content:"TargetKind",
        description:'',
        tags:''
    });

    a({
        id:120,
        title:"TfxArgumentBuilder",
        content:"TfxArgumentBuilder",
        description:'',
        tags:''
    });

    a({
        id:121,
        title:"GulpRunnerSettings",
        content:"GulpRunnerSettings",
        description:'',
        tags:''
    });

    a({
        id:122,
        title:"PackageProvider",
        content:"PackageProvider",
        description:'',
        tags:''
    });

    a({
        id:123,
        title:"Magnitude",
        content:"Magnitude",
        description:'',
        tags:''
    });

    a({
        id:124,
        title:"CertProvider",
        content:"CertProvider",
        description:'',
        tags:''
    });

    a({
        id:125,
        title:"MSBuildToolVersion",
        content:"MSBuildToolVersion",
        description:'',
        tags:''
    });

    a({
        id:126,
        title:"PackageSourceType",
        content:"PackageSourceType",
        description:'',
        tags:''
    });

    a({
        id:127,
        title:"LocalDbVersion",
        content:"LocalDbVersion",
        description:'',
        tags:''
    });

    a({
        id:128,
        title:"GitReleaseManagerAddAssetsSettings",
        content:"GitReleaseManagerAddAssetsSettings",
        description:'',
        tags:''
    });

    a({
        id:129,
        title:"MicrosoftTeamsMessageFacts",
        content:"MicrosoftTeamsMessageFacts",
        description:'',
        tags:''
    });

    a({
        id:130,
        title:"AppUnpacker",
        content:"AppUnpacker",
        description:'',
        tags:''
    });

    a({
        id:131,
        title:"ISignToolResolver",
        content:"ISignToolResolver",
        description:'',
        tags:''
    });

    a({
        id:132,
        title:"LogFileFormat",
        content:"LogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:133,
        title:"DocFxLogLevel",
        content:"DocFxLogLevel",
        description:'',
        tags:''
    });

    a({
        id:134,
        title:"MobileCenterDistributeGroupsDownloadSettings",
        content:"MobileCenterDistributeGroupsDownloadSettings",
        description:'',
        tags:''
    });

    a({
        id:135,
        title:"BitriseWorkflowInfo",
        content:"BitriseWorkflowInfo",
        description:'',
        tags:''
    });

    a({
        id:136,
        title:"AzureResourceGroupAliases",
        content:"AzureResourceGroupAliases",
        description:'',
        tags:''
    });

    a({
        id:137,
        title:"YarnAddSettings",
        content:"YarnAddSettings",
        description:'',
        tags:''
    });

    a({
        id:138,
        title:"CSharpGeneratorSettings",
        content:"CSharpGeneratorSettings",
        description:'',
        tags:''
    });

    a({
        id:139,
        title:"ReportGeneratorAliases",
        content:"ReportGeneratorAliases",
        description:'',
        tags:''
    });

    a({
        id:140,
        title:"StringPathExtensions",
        content:"StringPathExtensions",
        description:'',
        tags:''
    });

    a({
        id:141,
        title:"TfxServerSettings",
        content:"TfxServerSettings",
        description:'',
        tags:''
    });

    a({
        id:142,
        title:"IssueCommentFormat",
        content:"IssueCommentFormat",
        description:'',
        tags:''
    });

    a({
        id:143,
        title:"FakeLogExtensions",
        content:"FakeLogExtensions",
        description:'',
        tags:''
    });

    a({
        id:144,
        title:"ICakeContext",
        content:"ICakeContext",
        description:'',
        tags:''
    });

    a({
        id:145,
        title:"DotNetCoreToolRunner",
        content:"DotNetCoreToolRunner",
        description:'',
        tags:''
    });

    a({
        id:146,
        title:"XmlPokeAliases",
        content:"XmlPokeAliases",
        description:'',
        tags:''
    });

    a({
        id:147,
        title:"CakeTaskDependency",
        content:"CakeTaskDependency",
        description:'',
        tags:''
    });

    a({
        id:148,
        title:"IYarnRunnerCommands",
        content:"IYarnRunnerCommands",
        description:'',
        tags:''
    });

    a({
        id:149,
        title:"DoInDirectoryAliases",
        content:"DoInDirectoryAliases",
        description:'',
        tags:''
    });

    a({
        id:150,
        title:"TFInfo",
        content:"TFInfo",
        description:'',
        tags:''
    });

    a({
        id:151,
        title:"CompressionAliases",
        content:"CompressionAliases",
        description:'',
        tags:''
    });

    a({
        id:152,
        title:"SecurityAliases",
        content:"SecurityAliases",
        description:'',
        tags:''
    });

    a({
        id:153,
        title:"UserCreate",
        content:"UserCreate",
        description:'',
        tags:''
    });

    a({
        id:154,
        title:"SCM",
        content:"SCM",
        description:'',
        tags:''
    });

    a({
        id:155,
        title:"GitLinkSettings",
        content:"GitLinkSettings",
        description:'',
        tags:''
    });

    a({
        id:156,
        title:"FluentMigratorRunner",
        content:"FluentMigratorRunner",
        description:'',
        tags:''
    });

    a({
        id:157,
        title:"MachineConfig Provider",
        content:"MachineConfig Provider",
        description:'',
        tags:''
    });

    a({
        id:158,
        title:"DockerImageSaveSettings",
        content:"DockerImageSaveSettings",
        description:'',
        tags:''
    });

    a({
        id:159,
        title:"TextTransformSettings",
        content:"TextTransformSettings",
        description:'',
        tags:''
    });

    a({
        id:160,
        title:"NUnit Settings",
        content:"NUnit Settings",
        description:'',
        tags:''
    });

    a({
        id:161,
        title:"StringExtensions",
        content:"StringExtensions",
        description:'',
        tags:''
    });

    a({
        id:162,
        title:"AutoToolSettings",
        content:"AutoToolSettings",
        description:'',
        tags:''
    });

    a({
        id:163,
        title:"ProcessRunnerExtensions",
        content:"ProcessRunnerExtensions",
        description:'',
        tags:''
    });

    a({
        id:164,
        title:"TFBuildProvider",
        content:"TFBuildProvider",
        description:'',
        tags:''
    });

    a({
        id:165,
        title:"FileSetSettings",
        content:"FileSetSettings",
        description:'',
        tags:''
    });

    a({
        id:166,
        title:"TaskSetupContext",
        content:"TaskSetupContext",
        description:'',
        tags:''
    });

    a({
        id:167,
        title:"WatchAlias",
        content:"WatchAlias",
        description:'',
        tags:''
    });

    a({
        id:168,
        title:"DotCoverCoverer",
        content:"DotCoverCoverer",
        description:'',
        tags:''
    });

    a({
        id:169,
        title:"Aliases",
        content:"Aliases",
        description:'',
        tags:''
    });

    a({
        id:170,
        title:"IScriptRunner",
        content:"IScriptRunner",
        description:'',
        tags:''
    });

    a({
        id:171,
        title:"CommonModule",
        content:"CommonModule",
        description:'',
        tags:''
    });

    a({
        id:172,
        title:"VagrantSnapshotRestoreSettings",
        content:"VagrantSnapshotRestoreSettings",
        description:'',
        tags:''
    });

    a({
        id:173,
        title:"MobileCenterDistributeReleasesShowSettings",
        content:"MobileCenterDistributeReleasesShowSettings",
        description:'',
        tags:''
    });

    a({
        id:174,
        title:"IFile",
        content:"IFile",
        description:'',
        tags:''
    });

    a({
        id:175,
        title:"VscePackager",
        content:"VscePackager",
        description:'',
        tags:''
    });

    a({
        id:176,
        title:"VSWhereLegacy",
        content:"VSWhereLegacy",
        description:'',
        tags:''
    });

    a({
        id:177,
        title:"ChutzpahSettings",
        content:"ChutzpahSettings",
        description:'',
        tags:''
    });

    a({
        id:178,
        title:"TfxAuthType",
        content:"TfxAuthType",
        description:'',
        tags:''
    });

    a({
        id:179,
        title:"GenymotionAliases",
        content:"GenymotionAliases",
        description:'',
        tags:''
    });

    a({
        id:180,
        title:"ReleaseType",
        content:"ReleaseType",
        description:'',
        tags:''
    });

    a({
        id:181,
        title:"SonarCakeAliases",
        content:"SonarCakeAliases",
        description:'',
        tags:''
    });

    a({
        id:182,
        title:"ILoadBalancingManager",
        content:"ILoadBalancingManager",
        description:'',
        tags:''
    });

    a({
        id:183,
        title:"MobileCenterOrgsListSettings",
        content:"MobileCenterOrgsListSettings",
        description:'',
        tags:''
    });

    a({
        id:184,
        title:"OctoDeploySettings",
        content:"OctoDeploySettings",
        description:'',
        tags:''
    });

    a({
        id:185,
        title:"DotNetCoreEfDatabaseUpdateSettings",
        content:"DotNetCoreEfDatabaseUpdateSettings",
        description:'',
        tags:''
    });

    a({
        id:186,
        title:"Route Manager",
        content:"Route Manager",
        description:'',
        tags:''
    });

    a({
        id:187,
        title:"NUnit ProcessOption",
        content:"NUnit ProcessOption",
        description:'',
        tags:''
    });

    a({
        id:188,
        title:"PaketRestoreSettings",
        content:"PaketRestoreSettings",
        description:'',
        tags:''
    });

    a({
        id:189,
        title:"BambooRepositoryInfo",
        content:"BambooRepositoryInfo",
        description:'',
        tags:''
    });

    a({
        id:190,
        title:"MSBuildSettings",
        content:"MSBuildSettings",
        description:'',
        tags:''
    });

    a({
        id:191,
        title:"DotNetCorePacker",
        content:"DotNetCorePacker",
        description:'',
        tags:''
    });

    a({
        id:192,
        title:"StorytellerAliases",
        content:"StorytellerAliases",
        description:'',
        tags:''
    });

    a({
        id:193,
        title:"SettingsLayer",
        content:"SettingsLayer",
        description:'',
        tags:''
    });

    a({
        id:194,
        title:"IBaseIssueComponent",
        content:"IBaseIssueComponent",
        description:'',
        tags:''
    });

    a({
        id:195,
        title:"MobileCenterOrgsAppsListSettings",
        content:"MobileCenterOrgsAppsListSettings",
        description:'',
        tags:''
    });

    a({
        id:196,
        title:"MSBuildFileLoggerOutput",
        content:"MSBuildFileLoggerOutput",
        description:'',
        tags:''
    });

    a({
        id:197,
        title:"NuSpecContent",
        content:"NuSpecContent",
        description:'',
        tags:''
    });

    a({
        id:198,
        title:"MobileCenterTokensDeleteSettings",
        content:"MobileCenterTokensDeleteSettings",
        description:'',
        tags:''
    });

    a({
        id:199,
        title:"TerraformShowRunner",
        content:"TerraformShowRunner",
        description:'',
        tags:''
    });

    a({
        id:200,
        title:"LogExtensions",
        content:"LogExtensions",
        description:'',
        tags:''
    });

    a({
        id:201,
        title:"TerraformAliases",
        content:"TerraformAliases",
        description:'',
        tags:''
    });

    a({
        id:202,
        title:"VsixSignToolAliases",
        content:"VsixSignToolAliases",
        description:'',
        tags:''
    });

    a({
        id:203,
        title:"OctopusDeployAliases",
        content:"OctopusDeployAliases",
        description:'',
        tags:''
    });

    a({
        id:204,
        title:"EndpointCreatorSettings",
        content:"EndpointCreatorSettings",
        description:'',
        tags:''
    });

    a({
        id:205,
        title:"TextTransformation",
        content:"TextTransformation",
        description:'',
        tags:''
    });

    a({
        id:206,
        title:"SimulatorSettings",
        content:"SimulatorSettings",
        description:'',
        tags:''
    });

    a({
        id:207,
        title:"CreateReleaseSettings",
        content:"CreateReleaseSettings",
        description:'',
        tags:''
    });

    a({
        id:208,
        title:"MobileCenterCrashesUploadSymbolsSettings",
        content:"MobileCenterCrashesUploadSymbolsSettings",
        description:'',
        tags:''
    });

    a({
        id:209,
        title:"InnoSetupQuietMode",
        content:"InnoSetupQuietMode",
        description:'',
        tags:''
    });

    a({
        id:210,
        title:"XmlExtensions",
        content:"XmlExtensions",
        description:'',
        tags:''
    });

    a({
        id:211,
        title:"AppVeyorNuGetFeed",
        content:"AppVeyorNuGetFeed",
        description:'',
        tags:''
    });

    a({
        id:212,
        title:"WebServer Provider",
        content:"WebServer Provider",
        description:'',
        tags:''
    });

    a({
        id:213,
        title:"MobileCenterDistributeReleaseSettings",
        content:"MobileCenterDistributeReleaseSettings",
        description:'',
        tags:''
    });

    a({
        id:214,
        title:"ElasticBeanstalkAliases",
        content:"ElasticBeanstalkAliases",
        description:'',
        tags:''
    });

    a({
        id:215,
        title:"AppVeyorProjectBuild",
        content:"AppVeyorProjectBuild",
        description:'',
        tags:''
    });

    a({
        id:216,
        title:"WyamAliases",
        content:"WyamAliases",
        description:'',
        tags:''
    });

    a({
        id:217,
        title:"NpmTool",
        content:"NpmTool",
        description:'',
        tags:''
    });

    a({
        id:218,
        title:"CommonProjectTypeGuids",
        content:"CommonProjectTypeGuids",
        description:'',
        tags:''
    });

    a({
        id:219,
        title:"NuGetPackageInstaller",
        content:"NuGetPackageInstaller",
        description:'',
        tags:''
    });

    a({
        id:220,
        title:"IFtpService",
        content:"IFtpService",
        description:'',
        tags:''
    });

    a({
        id:221,
        title:"OctopusDeployReleaseDeploymentSettings",
        content:"OctopusDeployReleaseDeploymentSettings",
        description:'',
        tags:''
    });

    a({
        id:222,
        title:"TFBuildRecordData",
        content:"TFBuildRecordData",
        description:'',
        tags:''
    });

    a({
        id:223,
        title:"VagrantSettings",
        content:"VagrantSettings",
        description:'',
        tags:''
    });

    a({
        id:224,
        title:"InstallSettings",
        content:"InstallSettings",
        description:'',
        tags:''
    });

    a({
        id:225,
        title:"NpmSettingsExtensions",
        content:"NpmSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:226,
        title:"AppVeyorProjectHistory",
        content:"AppVeyorProjectHistory",
        description:'',
        tags:''
    });

    a({
        id:227,
        title:"BambooEnvironmentInfo",
        content:"BambooEnvironmentInfo",
        description:'',
        tags:''
    });

    a({
        id:228,
        title:"MobileCenterTestRunAppiumSettings",
        content:"MobileCenterTestRunAppiumSettings",
        description:'',
        tags:''
    });

    a({
        id:229,
        title:"PackageListState",
        content:"PackageListState",
        description:'',
        tags:''
    });

    a({
        id:230,
        title:"TransformConfig",
        content:"TransformConfig",
        description:'',
        tags:''
    });

    a({
        id:231,
        title:"DockerComposeDownSettings",
        content:"DockerComposeDownSettings",
        description:'',
        tags:''
    });

    a({
        id:232,
        title:"ActiveDirectorySettings",
        content:"ActiveDirectorySettings",
        description:'',
        tags:''
    });

    a({
        id:233,
        title:"TravisCIJobInfo",
        content:"TravisCIJobInfo",
        description:'',
        tags:''
    });

    a({
        id:234,
        title:"VSTestAliases",
        content:"VSTestAliases",
        description:'',
        tags:''
    });

    a({
        id:235,
        title:"TerraformSettings",
        content:"TerraformSettings",
        description:'',
        tags:''
    });

    a({
        id:236,
        title:"RecycleAppProvider",
        content:"RecycleAppProvider",
        description:'',
        tags:''
    });

    a({
        id:237,
        title:"AutoRestRunner",
        content:"AutoRestRunner",
        description:'',
        tags:''
    });

    a({
        id:238,
        title:"DotNetCoreRestoreSettings",
        content:"DotNetCoreRestoreSettings",
        description:'',
        tags:''
    });

    a({
        id:239,
        title:"MobileCenterAnalyticsAudienceSettings",
        content:"MobileCenterAnalyticsAudienceSettings",
        description:'',
        tags:''
    });

    a({
        id:240,
        title:"MultiPartFormDataContentExtensions",
        content:"MultiPartFormDataContentExtensions",
        description:'',
        tags:''
    });

    a({
        id:241,
        title:"CoverallsIoRunner",
        content:"CoverallsIoRunner",
        description:'',
        tags:''
    });

    a({
        id:242,
        title:"VsMetricsSettings",
        content:"VsMetricsSettings",
        description:'',
        tags:''
    });

    a({
        id:243,
        title:"VSWhereTool",
        content:"VSWhereTool",
        description:'',
        tags:''
    });

    a({
        id:244,
        title:"GitterProvider",
        content:"GitterProvider",
        description:'',
        tags:''
    });

    a({
        id:245,
        title:"PathTarget",
        content:"PathTarget",
        description:'',
        tags:''
    });

    a({
        id:246,
        title:"XdtTransformation",
        content:"XdtTransformation",
        description:'',
        tags:''
    });

    a({
        id:247,
        title:"YamlAliases",
        content:"YamlAliases",
        description:'',
        tags:''
    });

    a({
        id:248,
        title:"TransifexMode",
        content:"TransifexMode",
        description:'',
        tags:''
    });

    a({
        id:249,
        title:"NuGetSetApiKey",
        content:"NuGetSetApiKey",
        description:'',
        tags:''
    });

    a({
        id:250,
        title:"NSISAliases",
        content:"NSISAliases",
        description:'',
        tags:''
    });

    a({
        id:251,
        title:"GoCDMaterialRevisionsInfo",
        content:"GoCDMaterialRevisionsInfo",
        description:'',
        tags:''
    });

    a({
        id:252,
        title:"IProcessArgument",
        content:"IProcessArgument",
        description:'',
        tags:''
    });

    a({
        id:253,
        title:"WebpackRunnerFactory",
        content:"WebpackRunnerFactory",
        description:'',
        tags:''
    });

    a({
        id:254,
        title:"HttpSettingsExtensions",
        content:"HttpSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:255,
        title:"GenericPscpRunner",
        content:"GenericPscpRunner",
        description:'',
        tags:''
    });

    a({
        id:256,
        title:"IPullRequestSystem",
        content:"IPullRequestSystem",
        description:'',
        tags:''
    });

    a({
        id:257,
        title:"WiXAliases",
        content:"WiXAliases",
        description:'',
        tags:''
    });

    a({
        id:258,
        title:"AppPoolEnable BitProvider",
        content:"AppPoolEnable BitProvider",
        description:'',
        tags:''
    });

    a({
        id:259,
        title:"AdbLogcatOutputVerbosity",
        content:"AdbLogcatOutputVerbosity",
        description:'',
        tags:''
    });

    a({
        id:260,
        title:"GitLinkAliases",
        content:"GitLinkAliases",
        description:'',
        tags:''
    });

    a({
        id:261,
        title:"EndpointAliases",
        content:"EndpointAliases",
        description:'',
        tags:''
    });

    a({
        id:262,
        title:"GZip",
        content:"GZip",
        description:'',
        tags:''
    });

    a({
        id:263,
        title:"GitChangeKind",
        content:"GitChangeKind",
        description:'',
        tags:''
    });

    a({
        id:264,
        title:"ChocolateyPusher",
        content:"ChocolateyPusher",
        description:'',
        tags:''
    });

    a({
        id:265,
        title:"CustomProjectFile",
        content:"CustomProjectFile",
        description:'',
        tags:''
    });

    a({
        id:266,
        title:"FileSet",
        content:"FileSet",
        description:'',
        tags:''
    });

    a({
        id:267,
        title:"CurlAliases",
        content:"CurlAliases",
        description:'',
        tags:''
    });

    a({
        id:268,
        title:"ContinuaCIMessageType",
        content:"ContinuaCIMessageType",
        description:'',
        tags:''
    });

    a({
        id:269,
        title:"RuntimeFact",
        content:"RuntimeFact",
        description:'',
        tags:''
    });

    a({
        id:270,
        title:"DotNetCoreEfDatabaseDropSettings",
        content:"DotNetCoreEfDatabaseDropSettings",
        description:'',
        tags:''
    });

    a({
        id:271,
        title:"CurlUploadRunner",
        content:"CurlUploadRunner",
        description:'',
        tags:''
    });

    a({
        id:272,
        title:"DockerComposeStopSettings",
        content:"DockerComposeStopSettings",
        description:'',
        tags:''
    });

    a({
        id:273,
        title:"MobileCenterTestRunUitestSettings",
        content:"MobileCenterTestRunUitestSettings",
        description:'',
        tags:''
    });

    a({
        id:274,
        title:"AppleSimulatorWindowScale",
        content:"AppleSimulatorWindowScale",
        description:'',
        tags:''
    });

    a({
        id:275,
        title:"DirectoryPath",
        content:"DirectoryPath",
        description:'',
        tags:''
    });

    a({
        id:276,
        title:"Tools",
        content:"Tools",
        description:'',
        tags:''
    });

    a({
        id:277,
        title:"CMakeAliases",
        content:"CMakeAliases",
        description:'',
        tags:''
    });

    a({
        id:278,
        title:"DotNetCoreRestorer",
        content:"DotNetCoreRestorer",
        description:'',
        tags:''
    });

    a({
        id:279,
        title:"Globber",
        content:"Globber",
        description:'',
        tags:''
    });

    a({
        id:280,
        title:"PublishNuGetsSettings",
        content:"PublishNuGetsSettings",
        description:'',
        tags:''
    });

    a({
        id:281,
        title:"MobileCenterTelemetryOffSettings",
        content:"MobileCenterTelemetryOffSettings",
        description:'',
        tags:''
    });

    a({
        id:282,
        title:"File",
        content:"File",
        description:'',
        tags:''
    });

    a({
        id:283,
        title:"AppHostAuthOverrideProvider",
        content:"AppHostAuthOverrideProvider",
        description:'',
        tags:''
    });

    a({
        id:284,
        title:"GenymotionSimulatorNetworkMode",
        content:"GenymotionSimulatorNetworkMode",
        description:'',
        tags:''
    });

    a({
        id:285,
        title:"EnvironmentExtensions",
        content:"EnvironmentExtensions",
        description:'',
        tags:''
    });

    a({
        id:286,
        title:"GacAssemblyProvider",
        content:"GacAssemblyProvider",
        description:'',
        tags:''
    });

    a({
        id:287,
        title:"CMakeRunner",
        content:"CMakeRunner",
        description:'',
        tags:''
    });

    a({
        id:288,
        title:"NuGetListSettings",
        content:"NuGetListSettings",
        description:'',
        tags:''
    });

    a({
        id:289,
        title:"SettingsExtensions",
        content:"SettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:290,
        title:"NotifyOption",
        content:"NotifyOption",
        description:'',
        tags:''
    });

    a({
        id:291,
        title:"LoggingAliases",
        content:"LoggingAliases",
        description:'',
        tags:''
    });

    a({
        id:292,
        title:"IScriptHost",
        content:"IScriptHost",
        description:'',
        tags:''
    });

    a({
        id:293,
        title:"NUnitProcessOption",
        content:"NUnitProcessOption",
        description:'',
        tags:''
    });

    a({
        id:294,
        title:"ServiceManager",
        content:"ServiceManager",
        description:'',
        tags:''
    });

    a({
        id:295,
        title:"TFBuildMessageData",
        content:"TFBuildMessageData",
        description:'',
        tags:''
    });

    a({
        id:296,
        title:"WiXTemplateType",
        content:"WiXTemplateType",
        description:'',
        tags:''
    });

    a({
        id:297,
        title:"MagicChunksAliases",
        content:"MagicChunksAliases",
        description:'',
        tags:''
    });

    a({
        id:298,
        title:"AndoridAppManifestAliases",
        content:"AndoridAppManifestAliases",
        description:'',
        tags:''
    });

    a({
        id:299,
        title:"VSWhereAllSettings",
        content:"VSWhereAllSettings",
        description:'',
        tags:''
    });

    a({
        id:300,
        title:"MobileCenterTestPrepareXcuitestSettings",
        content:"MobileCenterTestPrepareXcuitestSettings",
        description:'',
        tags:''
    });

    a({
        id:301,
        title:"FakeProcess",
        content:"FakeProcess",
        description:'',
        tags:''
    });

    a({
        id:302,
        title:"OutputFormat",
        content:"OutputFormat",
        description:'',
        tags:''
    });

    a({
        id:303,
        title:"DockerComposeKillSettings",
        content:"DockerComposeKillSettings",
        description:'',
        tags:''
    });

    a({
        id:304,
        title:"RootWebConfig Provider",
        content:"RootWebConfig Provider",
        description:'',
        tags:''
    });

    a({
        id:305,
        title:"JsonReporterSettings",
        content:"JsonReporterSettings",
        description:'',
        tags:''
    });

    a({
        id:306,
        title:"CakeEnvironmentExtensions",
        content:"CakeEnvironmentExtensions",
        description:'',
        tags:''
    });

    a({
        id:307,
        title:"LoadReference",
        content:"LoadReference",
        description:'',
        tags:''
    });

    a({
        id:308,
        title:"ReSharperReportsSettings",
        content:"ReSharperReportsSettings",
        description:'',
        tags:''
    });

    a({
        id:309,
        title:"TargetPlatform",
        content:"TargetPlatform",
        description:'',
        tags:''
    });

    a({
        id:310,
        title:"DotNetCoreToolSettings",
        content:"DotNetCoreToolSettings",
        description:'',
        tags:''
    });

    a({
        id:311,
        title:"PaketPushSettings",
        content:"PaketPushSettings",
        description:'',
        tags:''
    });

    a({
        id:312,
        title:"NpmRebuilSettingsExtensions",
        content:"NpmRebuilSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:313,
        title:"PdfPageSize",
        content:"PdfPageSize",
        description:'',
        tags:''
    });

    a({
        id:314,
        title:"SolutionFolder",
        content:"SolutionFolder",
        description:'',
        tags:''
    });

    a({
        id:315,
        title:"XamarinComponentUploadSettings",
        content:"XamarinComponentUploadSettings",
        description:'',
        tags:''
    });

    a({
        id:316,
        title:"ArgumentsBuilderExtension",
        content:"ArgumentsBuilderExtension",
        description:'',
        tags:''
    });

    a({
        id:317,
        title:"GemSettings",
        content:"GemSettings",
        description:'',
        tags:''
    });

    a({
        id:318,
        title:"CoverallsIoSettings",
        content:"CoverallsIoSettings",
        description:'',
        tags:''
    });

    a({
        id:319,
        title:"Extensions",
        content:"Extensions",
        description:'',
        tags:''
    });

    a({
        id:320,
        title:"OctopusPushSettings",
        content:"OctopusPushSettings",
        description:'',
        tags:''
    });

    a({
        id:321,
        title:"Credentials",
        content:"Credentials",
        description:'',
        tags:''
    });

    a({
        id:322,
        title:"ActionTask",
        content:"ActionTask",
        description:'',
        tags:''
    });

    a({
        id:323,
        title:"CakeEnvironmentExtensions",
        content:"CakeEnvironmentExtensions",
        description:'',
        tags:''
    });

    a({
        id:324,
        title:"DeleteKeyValueMapResult",
        content:"DeleteKeyValueMapResult",
        description:'',
        tags:''
    });

    a({
        id:325,
        title:"IPullRequestDiscussionComment",
        content:"IPullRequestDiscussionComment",
        description:'',
        tags:''
    });

    a({
        id:326,
        title:"KeePassDatabaseSettings",
        content:"KeePassDatabaseSettings",
        description:'',
        tags:''
    });

    a({
        id:327,
        title:"BaseRuleUrlResolver",
        content:"BaseRuleUrlResolver",
        description:'',
        tags:''
    });

    a({
        id:328,
        title:"CocoaPodAliases",
        content:"CocoaPodAliases",
        description:'',
        tags:''
    });

    a({
        id:329,
        title:"MachineConfig Provider",
        content:"MachineConfig Provider",
        description:'',
        tags:''
    });

    a({
        id:330,
        title:"ModifiedCheck",
        content:"ModifiedCheck",
        description:'',
        tags:''
    });

    a({
        id:331,
        title:"TextArgument",
        content:"TextArgument",
        description:'',
        tags:''
    });

    a({
        id:332,
        title:"VSWhereProduct",
        content:"VSWhereProduct",
        description:'',
        tags:''
    });

    a({
        id:333,
        title:"GitReleaseManagerAliases",
        content:"GitReleaseManagerAliases",
        description:'',
        tags:''
    });

    a({
        id:334,
        title:"FakeFileExtensions",
        content:"FakeFileExtensions",
        description:'',
        tags:''
    });

    a({
        id:335,
        title:"IParameter",
        content:"IParameter",
        description:'',
        tags:''
    });

    a({
        id:336,
        title:"NpmRebuilder",
        content:"NpmRebuilder",
        description:'',
        tags:''
    });

    a({
        id:337,
        title:"AndroidSdkManagerProxyType",
        content:"AndroidSdkManagerProxyType",
        description:'',
        tags:''
    });

    a({
        id:338,
        title:"FileExtensions",
        content:"FileExtensions",
        description:'',
        tags:''
    });

    a({
        id:339,
        title:"ILogFileFormat",
        content:"ILogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:340,
        title:"CsvHelperSettings",
        content:"CsvHelperSettings",
        description:'',
        tags:''
    });

    a({
        id:341,
        title:"CandleSettings",
        content:"CandleSettings",
        description:'',
        tags:''
    });

    a({
        id:342,
        title:"ContinuaCIBuildInfo",
        content:"ContinuaCIBuildInfo",
        description:'',
        tags:''
    });

    a({
        id:343,
        title:"GitVersionOutput",
        content:"GitVersionOutput",
        description:'',
        tags:''
    });

    a({
        id:344,
        title:"MobileCenterAppsShowSettings",
        content:"MobileCenterAppsShowSettings",
        description:'',
        tags:''
    });

    a({
        id:345,
        title:"AppPackagerAliases",
        content:"AppPackagerAliases",
        description:'',
        tags:''
    });

    a({
        id:346,
        title:"ICakeArguments",
        content:"ICakeArguments",
        description:'',
        tags:''
    });

    a({
        id:347,
        title:"MsDeployRunner",
        content:"MsDeployRunner",
        description:'',
        tags:''
    });

    a({
        id:348,
        title:"AssemblyInfoReflectorAliases",
        content:"AssemblyInfoReflectorAliases",
        description:'',
        tags:''
    });

    a({
        id:349,
        title:"CakeContext",
        content:"CakeContext",
        description:'',
        tags:''
    });

    a({
        id:350,
        title:"MobileCenterDistributeGroupsListSettings",
        content:"MobileCenterDistributeGroupsListSettings",
        description:'',
        tags:''
    });

    a({
        id:351,
        title:"IVsceToolResolver",
        content:"IVsceToolResolver",
        description:'',
        tags:''
    });

    a({
        id:352,
        title:"NuGetSources",
        content:"NuGetSources",
        description:'',
        tags:''
    });

    a({
        id:353,
        title:"GitLabCIInfo",
        content:"GitLabCIInfo",
        description:'',
        tags:''
    });

    a({
        id:354,
        title:"GulpRunnerFactory",
        content:"GulpRunnerFactory",
        description:'',
        tags:''
    });

    a({
        id:355,
        title:"FakeDirectoryExtensions",
        content:"FakeDirectoryExtensions",
        description:'',
        tags:''
    });

    a({
        id:356,
        title:"NUnit Aliases",
        content:"NUnit Aliases",
        description:'',
        tags:''
    });

    a({
        id:357,
        title:"CreateAppProvider",
        content:"CreateAppProvider",
        description:'',
        tags:''
    });

    a({
        id:358,
        title:"GitDiffFile",
        content:"GitDiffFile",
        description:'',
        tags:''
    });

    a({
        id:359,
        title:"GitVersionSettings",
        content:"GitVersionSettings",
        description:'',
        tags:''
    });

    a({
        id:360,
        title:"SyncReleasesRunner",
        content:"SyncReleasesRunner",
        description:'',
        tags:''
    });

    a({
        id:361,
        title:"PlinkProtocol",
        content:"PlinkProtocol",
        description:'',
        tags:''
    });

    a({
        id:362,
        title:"SwaggerSource",
        content:"SwaggerSource",
        description:'',
        tags:''
    });

    a({
        id:363,
        title:"TravisCIBuildInfo",
        content:"TravisCIBuildInfo",
        description:'',
        tags:''
    });

    a({
        id:364,
        title:"ICakeTaskInfo",
        content:"ICakeTaskInfo",
        description:'',
        tags:''
    });

    a({
        id:365,
        title:"YarnRunnerAliases",
        content:"YarnRunnerAliases",
        description:'',
        tags:''
    });

    a({
        id:366,
        title:"DotCoverReportSettings",
        content:"DotCoverReportSettings",
        description:'',
        tags:''
    });

    a({
        id:367,
        title:"OctoDeployAlias",
        content:"OctoDeployAlias",
        description:'',
        tags:''
    });

    a({
        id:368,
        title:"InnoSetupRunner",
        content:"InnoSetupRunner",
        description:'',
        tags:''
    });

    a({
        id:369,
        title:"TerraformShowSettings",
        content:"TerraformShowSettings",
        description:'',
        tags:''
    });

    a({
        id:370,
        title:"AutoProvider",
        content:"AutoProvider",
        description:'',
        tags:''
    });

    a({
        id:371,
        title:"JsonDocument",
        content:"JsonDocument",
        description:'',
        tags:''
    });

    a({
        id:372,
        title:"ToolFixtureExtensions",
        content:"ToolFixtureExtensions",
        description:'',
        tags:''
    });

    a({
        id:373,
        title:"FigletAliases",
        content:"FigletAliases",
        description:'',
        tags:''
    });

    a({
        id:374,
        title:"GenymotionLicenseSettings",
        content:"GenymotionLicenseSettings",
        description:'',
        tags:''
    });

    a({
        id:375,
        title:"ReleaseNotesAliases",
        content:"ReleaseNotesAliases",
        description:'',
        tags:''
    });

    a({
        id:376,
        title:"IIssueProvider",
        content:"IIssueProvider",
        description:'',
        tags:''
    });

    a({
        id:377,
        title:"EmberServeSettings",
        content:"EmberServeSettings",
        description:'',
        tags:''
    });

    a({
        id:378,
        title:"EmberTool",
        content:"EmberTool",
        description:'',
        tags:''
    });

    a({
        id:379,
        title:"MobileCenterAnalyticsSessionsSettings",
        content:"MobileCenterAnalyticsSessionsSettings",
        description:'',
        tags:''
    });

    a({
        id:380,
        title:"CakeContextExtensions",
        content:"CakeContextExtensions",
        description:'',
        tags:''
    });

    a({
        id:381,
        title:"MandatoryOption",
        content:"MandatoryOption",
        description:'',
        tags:''
    });

    a({
        id:382,
        title:"CakeEnvironmentExtensions",
        content:"CakeEnvironmentExtensions",
        description:'',
        tags:''
    });

    a({
        id:383,
        title:"ReportGeneratorSettings",
        content:"ReportGeneratorSettings",
        description:'',
        tags:''
    });

    a({
        id:384,
        title:"IFileSystem",
        content:"IFileSystem",
        description:'',
        tags:''
    });

    a({
        id:385,
        title:"SkipAction",
        content:"SkipAction",
        description:'',
        tags:''
    });

    a({
        id:386,
        title:"JenkinsNodeInfo",
        content:"JenkinsNodeInfo",
        description:'',
        tags:''
    });

    a({
        id:387,
        title:"KeePassEntry",
        content:"KeePassEntry",
        description:'',
        tags:''
    });

    a({
        id:388,
        title:"AppHostSchemaProvider",
        content:"AppHostSchemaProvider",
        description:'',
        tags:''
    });

    a({
        id:389,
        title:"ToolResolutionStrategy",
        content:"ToolResolutionStrategy",
        description:'',
        tags:''
    });

    a({
        id:390,
        title:"QuotedArgument",
        content:"QuotedArgument",
        description:'',
        tags:''
    });

    a({
        id:391,
        title:"FakeFileSystem",
        content:"FakeFileSystem",
        description:'',
        tags:''
    });

    a({
        id:392,
        title:"GitLabCIRunnerInfo",
        content:"GitLabCIRunnerInfo",
        description:'',
        tags:''
    });

    a({
        id:393,
        title:"TextTransformationTemplate",
        content:"TextTransformationTemplate",
        description:'',
        tags:''
    });

    a({
        id:394,
        title:"VagrantInitSettings",
        content:"VagrantInitSettings",
        description:'',
        tags:''
    });

    a({
        id:395,
        title:"VagrantBoxAddSettingsExtensions",
        content:"VagrantBoxAddSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:396,
        title:"GenymotionSimulator",
        content:"GenymotionSimulator",
        description:'',
        tags:''
    });

    a({
        id:397,
        title:"BackupManagerProvider",
        content:"BackupManagerProvider",
        description:'',
        tags:''
    });

    a({
        id:398,
        title:"Migration",
        content:"Migration",
        description:'',
        tags:''
    });

    a({
        id:399,
        title:"IToolRepository",
        content:"IToolRepository",
        description:'',
        tags:''
    });

    a({
        id:400,
        title:"IAppVeyorProvider",
        content:"IAppVeyorProvider",
        description:'',
        tags:''
    });

    a({
        id:401,
        title:"VsceToolResolver",
        content:"VsceToolResolver",
        description:'',
        tags:''
    });

    a({
        id:402,
        title:"ChocolateyPinner",
        content:"ChocolateyPinner",
        description:'',
        tags:''
    });

    a({
        id:403,
        title:"DockerContainerExecSettings",
        content:"DockerContainerExecSettings",
        description:'',
        tags:''
    });

    a({
        id:404,
        title:"ProjectAssemblyReference",
        content:"ProjectAssemblyReference",
        description:'',
        tags:''
    });

    a({
        id:405,
        title:"MarkdownlintIssuesAliases",
        content:"MarkdownlintIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:406,
        title:"NuGetAddSettings",
        content:"NuGetAddSettings",
        description:'',
        tags:''
    });

    a({
        id:407,
        title:"UserDisable",
        content:"UserDisable",
        description:'',
        tags:''
    });

    a({
        id:408,
        title:"DotNetCoreTool",
        content:"DotNetCoreTool",
        description:'',
        tags:''
    });

    a({
        id:409,
        title:"RootWebConfig Provider",
        content:"RootWebConfig Provider",
        description:'',
        tags:''
    });

    a({
        id:410,
        title:"IssuesAliasConstants",
        content:"IssuesAliasConstants",
        description:'',
        tags:''
    });

    a({
        id:411,
        title:"BuildTarget",
        content:"BuildTarget",
        description:'',
        tags:''
    });

    a({
        id:412,
        title:"AndroidAppManifest",
        content:"AndroidAppManifest",
        description:'',
        tags:''
    });

    a({
        id:413,
        title:"DotCoverReporter",
        content:"DotCoverReporter",
        description:'',
        tags:''
    });

    a({
        id:414,
        title:"EfMigrationException",
        content:"EfMigrationException",
        description:'',
        tags:''
    });

    a({
        id:415,
        title:"DirectoryPathCollection",
        content:"DirectoryPathCollection",
        description:'',
        tags:''
    });

    a({
        id:416,
        title:"DockerNetworkCreateSettings",
        content:"DockerNetworkCreateSettings",
        description:'',
        tags:''
    });

    a({
        id:417,
        title:"DockerNetworkRemoveSettings",
        content:"DockerNetworkRemoveSettings",
        description:'',
        tags:''
    });

    a({
        id:418,
        title:"IJenkinsProvider",
        content:"IJenkinsProvider",
        description:'',
        tags:''
    });

    a({
        id:419,
        title:"SyncReleasesSettings",
        content:"SyncReleasesSettings",
        description:'',
        tags:''
    });

    a({
        id:420,
        title:"NpmSettings",
        content:"NpmSettings",
        description:'',
        tags:''
    });

    a({
        id:421,
        title:"BaseParameter",
        content:"BaseParameter",
        description:'',
        tags:''
    });

    a({
        id:422,
        title:"AssemblyInfoAliases",
        content:"AssemblyInfoAliases",
        description:'',
        tags:''
    });

    a({
        id:423,
        title:"ProjectFile",
        content:"ProjectFile",
        description:'',
        tags:''
    });

    a({
        id:424,
        title:"KuduSyncSettings",
        content:"KuduSyncSettings",
        description:'',
        tags:''
    });

    a({
        id:425,
        title:"RegKeyProvider",
        content:"RegKeyProvider",
        description:'',
        tags:''
    });

    a({
        id:426,
        title:"MobileCenterTestPrepareUitestSettings",
        content:"MobileCenterTestPrepareUitestSettings",
        description:'',
        tags:''
    });

    a({
        id:427,
        title:"AppVeyorProject",
        content:"AppVeyorProject",
        description:'',
        tags:''
    });

    a({
        id:428,
        title:"JsonAliases",
        content:"JsonAliases",
        description:'',
        tags:''
    });

    a({
        id:429,
        title:"MobileCenterTestPrepareAppiumSettings",
        content:"MobileCenterTestPrepareAppiumSettings",
        description:'',
        tags:''
    });

    a({
        id:430,
        title:"DiskFilesProvider",
        content:"DiskFilesProvider",
        description:'',
        tags:''
    });

    a({
        id:431,
        title:"IScriptAnalyzerContext",
        content:"IScriptAnalyzerContext",
        description:'',
        tags:''
    });

    a({
        id:432,
        title:"RoundhouseAliases",
        content:"RoundhouseAliases",
        description:'',
        tags:''
    });

    a({
        id:433,
        title:"ScriptResult",
        content:"ScriptResult",
        description:'',
        tags:''
    });

    a({
        id:434,
        title:"IS Manager",
        content:"IS Manager",
        description:'',
        tags:''
    });

    a({
        id:435,
        title:"IGlobber",
        content:"IGlobber",
        description:'',
        tags:''
    });

    a({
        id:436,
        title:"NuGetList",
        content:"NuGetList",
        description:'',
        tags:''
    });

    a({
        id:437,
        title:"EsLintIssuesSettings",
        content:"EsLintIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:438,
        title:"DotNetCoreEfMigrationAddSettings",
        content:"DotNetCoreEfMigrationAddSettings",
        description:'',
        tags:''
    });

    a({
        id:439,
        title:"DotNetCoreMSBuildSettings",
        content:"DotNetCoreMSBuildSettings",
        description:'',
        tags:''
    });

    a({
        id:440,
        title:"GitterChatMessageResult",
        content:"GitterChatMessageResult",
        description:'',
        tags:''
    });

    a({
        id:441,
        title:"GenymotionCreateSettings",
        content:"GenymotionCreateSettings",
        description:'',
        tags:''
    });

    a({
        id:442,
        title:"ICakeConfiguration",
        content:"ICakeConfiguration",
        description:'',
        tags:''
    });

    a({
        id:443,
        title:"MetaKeyProvider",
        content:"MetaKeyProvider",
        description:'',
        tags:''
    });

    a({
        id:444,
        title:"DeployProxyResult",
        content:"DeployProxyResult",
        description:'',
        tags:''
    });

    a({
        id:445,
        title:"Tool",
        content:"Tool",
        description:'',
        tags:''
    });

    a({
        id:446,
        title:"ScriptRunner",
        content:"ScriptRunner",
        description:'',
        tags:''
    });

    a({
        id:447,
        title:"MSBuildTreatAllWarningsAs",
        content:"MSBuildTreatAllWarningsAs",
        description:'',
        tags:''
    });

    a({
        id:448,
        title:"OpenCoverSettings",
        content:"OpenCoverSettings",
        description:'',
        tags:''
    });

    a({
        id:449,
        title:"DocFxSettings",
        content:"DocFxSettings",
        description:'',
        tags:''
    });

    a({
        id:450,
        title:"IToolLocator",
        content:"IToolLocator",
        description:'',
        tags:''
    });

    a({
        id:451,
        title:"SqlPackageScriptSettings",
        content:"SqlPackageScriptSettings",
        description:'',
        tags:''
    });

    a({
        id:452,
        title:"PscpTool",
        content:"PscpTool",
        description:'',
        tags:''
    });

    a({
        id:453,
        title:"DefaultExecutionStrategy",
        content:"DefaultExecutionStrategy",
        description:'',
        tags:''
    });

    a({
        id:454,
        title:"VagrantRunner",
        content:"VagrantRunner",
        description:'',
        tags:''
    });

    a({
        id:455,
        title:"AppVeyorCommitInfo",
        content:"AppVeyorCommitInfo",
        description:'',
        tags:''
    });

    a({
        id:456,
        title:"TopshelfAliases",
        content:"TopshelfAliases",
        description:'',
        tags:''
    });

    a({
        id:457,
        title:"MicrosecondEpochConverter",
        content:"MicrosecondEpochConverter",
        description:'',
        tags:''
    });

    a({
        id:458,
        title:"TypeExtensions",
        content:"TypeExtensions",
        description:'',
        tags:''
    });

    a({
        id:459,
        title:"ITfsCredentials",
        content:"ITfsCredentials",
        description:'',
        tags:''
    });

    a({
        id:460,
        title:"MobileCenterOrgsShowSettings",
        content:"MobileCenterOrgsShowSettings",
        description:'',
        tags:''
    });

    a({
        id:461,
        title:"NuGetSetApiKeySettings",
        content:"NuGetSetApiKeySettings",
        description:'',
        tags:''
    });

    a({
        id:462,
        title:"HockeyAppAliases",
        content:"HockeyAppAliases",
        description:'',
        tags:''
    });

    a({
        id:463,
        title:"CloudFrontSettingsExtensions",
        content:"CloudFrontSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:464,
        title:"ITfxArgumentBuilder",
        content:"ITfxArgumentBuilder",
        description:'',
        tags:''
    });

    a({
        id:465,
        title:"AssemblyInfoCreator",
        content:"AssemblyInfoCreator",
        description:'',
        tags:''
    });

    a({
        id:466,
        title:"EnumerableExtensions",
        content:"EnumerableExtensions",
        description:'',
        tags:''
    });

    a({
        id:467,
        title:"AppVeyorPullRequestInfo",
        content:"AppVeyorPullRequestInfo",
        description:'',
        tags:''
    });

    a({
        id:468,
        title:"ScriptConventions",
        content:"ScriptConventions",
        description:'',
        tags:''
    });

    a({
        id:469,
        title:"BitbucketPipelinesEnvironmentInfo",
        content:"BitbucketPipelinesEnvironmentInfo",
        description:'',
        tags:''
    });

    a({
        id:470,
        title:"SqlPackageSettings",
        content:"SqlPackageSettings",
        description:'',
        tags:''
    });

    a({
        id:471,
        title:"GenymotionDeviceSettings",
        content:"GenymotionDeviceSettings",
        description:'',
        tags:''
    });

    a({
        id:472,
        title:"ReSharperReportsAliases",
        content:"ReSharperReportsAliases",
        description:'',
        tags:''
    });

    a({
        id:473,
        title:"MSBuildVersion",
        content:"MSBuildVersion",
        description:'',
        tags:''
    });

    a({
        id:474,
        title:"StorytellerException",
        content:"StorytellerException",
        description:'',
        tags:''
    });

    a({
        id:475,
        title:"GenymotionConfigSettings",
        content:"GenymotionConfigSettings",
        description:'',
        tags:''
    });

    a({
        id:476,
        title:"ChocolateyUpgradeSettings",
        content:"ChocolateyUpgradeSettings",
        description:'',
        tags:''
    });

    a({
        id:477,
        title:"ContentPathAspNetCoreProvider",
        content:"ContentPathAspNetCoreProvider",
        description:'',
        tags:''
    });

    a({
        id:478,
        title:"CurlDownloadRunner",
        content:"CurlDownloadRunner",
        description:'',
        tags:''
    });

    a({
        id:479,
        title:"GenerationSource",
        content:"GenerationSource",
        description:'',
        tags:''
    });

    a({
        id:480,
        title:"Endpoint",
        content:"Endpoint",
        description:'',
        tags:''
    });

    a({
        id:481,
        title:"ToolFixtureProcessRunner",
        content:"ToolFixtureProcessRunner",
        description:'',
        tags:''
    });

    a({
        id:482,
        title:"HtmlReporterSettings",
        content:"HtmlReporterSettings",
        description:'',
        tags:''
    });

    a({
        id:483,
        title:"PullRequestDiscussionComment",
        content:"PullRequestDiscussionComment",
        description:'',
        tags:''
    });

    a({
        id:484,
        title:"DotNetCoreTester",
        content:"DotNetCoreTester",
        description:'',
        tags:''
    });

    a({
        id:485,
        title:"BitbucketPipelinesProvider",
        content:"BitbucketPipelinesProvider",
        description:'',
        tags:''
    });

    a({
        id:486,
        title:"GitResetMode",
        content:"GitResetMode",
        description:'',
        tags:''
    });

    a({
        id:487,
        title:"GitReleaseManagerCreateSettings",
        content:"GitReleaseManagerCreateSettings",
        description:'',
        tags:''
    });

    a({
        id:488,
        title:"ScriptAnalyzerError",
        content:"ScriptAnalyzerError",
        description:'',
        tags:''
    });

    a({
        id:489,
        title:"CakeSettings",
        content:"CakeSettings",
        description:'',
        tags:''
    });

    a({
        id:490,
        title:"SpecFlowAliases",
        content:"SpecFlowAliases",
        description:'',
        tags:''
    });

    a({
        id:491,
        title:"TFBuildArtifactType",
        content:"TFBuildArtifactType",
        description:'',
        tags:''
    });

    a({
        id:492,
        title:"TerraformEnvDeleteRunner",
        content:"TerraformEnvDeleteRunner",
        description:'',
        tags:''
    });

    a({
        id:493,
        title:"SendGridAliases",
        content:"SendGridAliases",
        description:'',
        tags:''
    });

    a({
        id:494,
        title:"MSBuildPlatform",
        content:"MSBuildPlatform",
        description:'',
        tags:''
    });

    a({
        id:495,
        title:"GitReleaseManagerTool",
        content:"GitReleaseManagerTool",
        description:'',
        tags:''
    });

    a({
        id:496,
        title:"ArgumentAliases",
        content:"ArgumentAliases",
        description:'',
        tags:''
    });

    a({
        id:497,
        title:"CakeReportEntry",
        content:"CakeReportEntry",
        description:'',
        tags:''
    });

    a({
        id:498,
        title:"FakeFile",
        content:"FakeFile",
        description:'',
        tags:''
    });

    a({
        id:499,
        title:"FakeConfiguration",
        content:"FakeConfiguration",
        description:'',
        tags:''
    });

    a({
        id:500,
        title:"MSBuildConsoleColorType",
        content:"MSBuildConsoleColorType",
        description:'',
        tags:''
    });

    a({
        id:501,
        title:"DotNetBuildSettingsExtensions",
        content:"DotNetBuildSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:502,
        title:"SendGridSettings",
        content:"SendGridSettings",
        description:'',
        tags:''
    });

    a({
        id:503,
        title:"BuildSystem",
        content:"BuildSystem",
        description:'',
        tags:''
    });

    a({
        id:504,
        title:"AmInstrumentOptions",
        content:"AmInstrumentOptions",
        description:'',
        tags:''
    });

    a({
        id:505,
        title:"YarnRunnerSettings",
        content:"YarnRunnerSettings",
        description:'',
        tags:''
    });

    a({
        id:506,
        title:"MobileCenterAliases",
        content:"MobileCenterAliases",
        description:'',
        tags:''
    });

    a({
        id:507,
        title:"GitReleaseManagerExporter",
        content:"GitReleaseManagerExporter",
        description:'',
        tags:''
    });

    a({
        id:508,
        title:"TransifexRunnerSettings",
        content:"TransifexRunnerSettings",
        description:'',
        tags:''
    });

    a({
        id:509,
        title:"EC Aliases",
        content:"EC Aliases",
        description:'',
        tags:''
    });

    a({
        id:510,
        title:"GoCDEnvironmentInfo",
        content:"GoCDEnvironmentInfo",
        description:'',
        tags:''
    });

    a({
        id:511,
        title:"IResxConverterOutput",
        content:"IResxConverterOutput",
        description:'',
        tags:''
    });

    a({
        id:512,
        title:"CakeHostsAliases",
        content:"CakeHostsAliases",
        description:'',
        tags:''
    });

    a({
        id:513,
        title:"DotNetCoreExecutor",
        content:"DotNetCoreExecutor",
        description:'',
        tags:''
    });

    a({
        id:514,
        title:"VsixSignToolRunner",
        content:"VsixSignToolRunner",
        description:'',
        tags:''
    });

    a({
        id:515,
        title:"DotNetCoreCleaner",
        content:"DotNetCoreCleaner",
        description:'',
        tags:''
    });

    a({
        id:516,
        title:"IEC Manager",
        content:"IEC Manager",
        description:'',
        tags:''
    });

    a({
        id:517,
        title:"ICakePlatform",
        content:"ICakePlatform",
        description:'',
        tags:''
    });

    a({
        id:518,
        title:"XamarinComponentSubmitSettings",
        content:"XamarinComponentSubmitSettings",
        description:'',
        tags:''
    });

    a({
        id:519,
        title:"ChocolateyScaffolder",
        content:"ChocolateyScaffolder",
        description:'',
        tags:''
    });

    a({
        id:520,
        title:"ReplacementRule",
        content:"ReplacementRule",
        description:'',
        tags:''
    });

    a({
        id:521,
        title:"ProjectType",
        content:"ProjectType",
        description:'',
        tags:''
    });

    a({
        id:522,
        title:"AppVeyorUploadArtifactType",
        content:"AppVeyorUploadArtifactType",
        description:'',
        tags:''
    });

    a({
        id:523,
        title:"ProjHelpers",
        content:"ProjHelpers",
        description:'',
        tags:''
    });

    a({
        id:524,
        title:"HeatSettings",
        content:"HeatSettings",
        description:'',
        tags:''
    });

    a({
        id:525,
        title:"TfxTool",
        content:"TfxTool",
        description:'',
        tags:''
    });

    a({
        id:526,
        title:"ResxString",
        content:"ResxString",
        description:'',
        tags:''
    });

    a({
        id:527,
        title:"DocFxMetadataSettings",
        content:"DocFxMetadataSettings",
        description:'',
        tags:''
    });

    a({
        id:528,
        title:"AppPackagerSettings",
        content:"AppPackagerSettings",
        description:'',
        tags:''
    });

    a({
        id:529,
        title:"VscePackageSettings",
        content:"VscePackageSettings",
        description:'',
        tags:''
    });

    a({
        id:530,
        title:"GitLabCIProvider",
        content:"GitLabCIProvider",
        description:'',
        tags:''
    });

    a({
        id:531,
        title:"TransformationCollection",
        content:"TransformationCollection",
        description:'',
        tags:''
    });

    a({
        id:532,
        title:"CSharpGeneratorSettingsExtensions",
        content:"CSharpGeneratorSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:533,
        title:"DockerComposeRestartSettings",
        content:"DockerComposeRestartSettings",
        description:'',
        tags:''
    });

    a({
        id:534,
        title:"DotNetCoreEfMigrationScripter",
        content:"DotNetCoreEfMigrationScripter",
        description:'',
        tags:''
    });

    a({
        id:535,
        title:"GitReleaseManagerMilestoneCloser",
        content:"GitReleaseManagerMilestoneCloser",
        description:'',
        tags:''
    });

    a({
        id:536,
        title:"DocFxIssuesSettings",
        content:"DocFxIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:537,
        title:"PlatformTarget",
        content:"PlatformTarget",
        description:'',
        tags:''
    });

    a({
        id:538,
        title:"GulpLocalRunner",
        content:"GulpLocalRunner",
        description:'',
        tags:''
    });

    a({
        id:539,
        title:"ICakeRuntime",
        content:"ICakeRuntime",
        description:'',
        tags:''
    });

    a({
        id:540,
        title:"TravisCIProvider",
        content:"TravisCIProvider",
        description:'',
        tags:''
    });

    a({
        id:541,
        title:"QuoteAwareStringSplitter",
        content:"QuoteAwareStringSplitter",
        description:'',
        tags:''
    });

    a({
        id:542,
        title:"RemoteAgent",
        content:"RemoteAgent",
        description:'',
        tags:''
    });

    a({
        id:543,
        title:"DotNetCoreSettings",
        content:"DotNetCoreSettings",
        description:'',
        tags:''
    });

    a({
        id:544,
        title:"TopshelfManager",
        content:"TopshelfManager",
        description:'',
        tags:''
    });

    a({
        id:545,
        title:"CustomProjectParserResult",
        content:"CustomProjectParserResult",
        description:'',
        tags:''
    });

    a({
        id:546,
        title:"ITextTransformationTemplate",
        content:"ITextTransformationTemplate",
        description:'',
        tags:''
    });

    a({
        id:547,
        title:"ICakeEnvironment",
        content:"ICakeEnvironment",
        description:'',
        tags:''
    });

    a({
        id:548,
        title:"DockerComposePullSettings",
        content:"DockerComposePullSettings",
        description:'',
        tags:''
    });

    a({
        id:549,
        title:"ChocolateyApiKeySettings",
        content:"ChocolateyApiKeySettings",
        description:'',
        tags:''
    });

    a({
        id:550,
        title:"MobileCenterDistributeGroupsShowSettings",
        content:"MobileCenterDistributeGroupsShowSettings",
        description:'',
        tags:''
    });

    a({
        id:551,
        title:"Route Settings",
        content:"Route Settings",
        description:'',
        tags:''
    });

    a({
        id:552,
        title:"AppVeyorProjectInfo",
        content:"AppVeyorProjectInfo",
        description:'',
        tags:''
    });

    a({
        id:553,
        title:"XUnitAliases",
        content:"XUnitAliases",
        description:'',
        tags:''
    });

    a({
        id:554,
        title:"ProjectTypes",
        content:"ProjectTypes",
        description:'',
        tags:''
    });

    a({
        id:555,
        title:"CakeConfigurationProvider",
        content:"CakeConfigurationProvider",
        description:'',
        tags:''
    });

    a({
        id:556,
        title:"MSBuildFileLoggerSettings",
        content:"MSBuildFileLoggerSettings",
        description:'',
        tags:''
    });

    a({
        id:557,
        title:"ChocolateyInstaller",
        content:"ChocolateyInstaller",
        description:'',
        tags:''
    });

    a({
        id:558,
        title:"LightSettings",
        content:"LightSettings",
        description:'',
        tags:''
    });

    a({
        id:559,
        title:"ChocolateyFeatureToggler",
        content:"ChocolateyFeatureToggler",
        description:'',
        tags:''
    });

    a({
        id:560,
        title:"DirectoryExtensions",
        content:"DirectoryExtensions",
        description:'',
        tags:''
    });

    a({
        id:561,
        title:"AutoRestAliases",
        content:"AutoRestAliases",
        description:'',
        tags:''
    });

    a({
        id:562,
        title:"Deployment",
        content:"Deployment",
        description:'',
        tags:''
    });

    a({
        id:563,
        title:"XmlTransformation",
        content:"XmlTransformation",
        description:'',
        tags:''
    });

    a({
        id:564,
        title:"TFBuildAgentInfo",
        content:"TFBuildAgentInfo",
        description:'',
        tags:''
    });

    a({
        id:565,
        title:"DbDacFxProvider",
        content:"DbDacFxProvider",
        description:'',
        tags:''
    });

    a({
        id:566,
        title:"DotNetCoreMSBuildSettingsExtensions",
        content:"DotNetCoreMSBuildSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:567,
        title:"IBambooProvider",
        content:"IBambooProvider",
        description:'',
        tags:''
    });

    a({
        id:568,
        title:"MSTestRunner",
        content:"MSTestRunner",
        description:'',
        tags:''
    });

    a({
        id:569,
        title:"XUnit Aliases",
        content:"XUnit Aliases",
        description:'',
        tags:''
    });

    a({
        id:570,
        title:"FixieSettings",
        content:"FixieSettings",
        description:'',
        tags:''
    });

    a({
        id:571,
        title:"NewmanSettingsExtensions",
        content:"NewmanSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:572,
        title:"IReporterSettings",
        content:"IReporterSettings",
        description:'',
        tags:''
    });

    a({
        id:573,
        title:"ResxConverterProvider",
        content:"ResxConverterProvider",
        description:'',
        tags:''
    });

    a({
        id:574,
        title:"DockerComposeCreateSettings",
        content:"DockerComposeCreateSettings",
        description:'',
        tags:''
    });

    a({
        id:575,
        title:"DeleteDirectorySettings",
        content:"DeleteDirectorySettings",
        description:'',
        tags:''
    });

    a({
        id:576,
        title:"ILMergeAliases",
        content:"ILMergeAliases",
        description:'',
        tags:''
    });

    a({
        id:577,
        title:"TFBuildRepositoryInfo",
        content:"TFBuildRepositoryInfo",
        description:'',
        tags:''
    });

    a({
        id:578,
        title:"XmlTransformationSettings",
        content:"XmlTransformationSettings",
        description:'',
        tags:''
    });

    a({
        id:579,
        title:"SqlPackageExtractSettings",
        content:"SqlPackageExtractSettings",
        description:'',
        tags:''
    });

    a({
        id:580,
        title:"DockerSwarmJoinSettings",
        content:"DockerSwarmJoinSettings",
        description:'',
        tags:''
    });

    a({
        id:581,
        title:"SquirrelAliases",
        content:"SquirrelAliases",
        description:'',
        tags:''
    });

    a({
        id:582,
        title:"CakeTaskExtensions",
        content:"CakeTaskExtensions",
        description:'',
        tags:''
    });

    a({
        id:583,
        title:"FileSystem",
        content:"FileSystem",
        description:'',
        tags:''
    });

    a({
        id:584,
        title:"ProcessRunner",
        content:"ProcessRunner",
        description:'',
        tags:''
    });

    a({
        id:585,
        title:"MobileCenterOrgsCreateSettings",
        content:"MobileCenterOrgsCreateSettings",
        description:'',
        tags:''
    });

    a({
        id:586,
        title:"ApiProxy",
        content:"ApiProxy",
        description:'',
        tags:''
    });

    a({
        id:587,
        title:"MobileCenterTool",
        content:"MobileCenterTool",
        description:'',
        tags:''
    });

    a({
        id:588,
        title:"VSWhereProductSettings",
        content:"VSWhereProductSettings",
        description:'',
        tags:''
    });

    a({
        id:589,
        title:"AppleSimulatorLaunchSettings",
        content:"AppleSimulatorLaunchSettings",
        description:'',
        tags:''
    });

    a({
        id:590,
        title:"ActiveDirectoryAliases",
        content:"ActiveDirectoryAliases",
        description:'',
        tags:''
    });

    a({
        id:591,
        title:"ProcessBuilderExtensionsMethods",
        content:"ProcessBuilderExtensionsMethods",
        description:'',
        tags:''
    });

    a({
        id:592,
        title:"GitReleaseManagerAssetsAdder",
        content:"GitReleaseManagerAssetsAdder",
        description:'',
        tags:''
    });

    a({
        id:593,
        title:"IEnvironmentSettings",
        content:"IEnvironmentSettings",
        description:'',
        tags:''
    });

    a({
        id:594,
        title:"FakeRuntime",
        content:"FakeRuntime",
        description:'',
        tags:''
    });

    a({
        id:595,
        title:"LoadBalancingSettingsExtensions",
        content:"LoadBalancingSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:596,
        title:"DeployEnvironment",
        content:"DeployEnvironment",
        description:'',
        tags:''
    });

    a({
        id:597,
        title:"ITopshelfManager",
        content:"ITopshelfManager",
        description:'',
        tags:''
    });

    a({
        id:598,
        title:"SetupEventArgs",
        content:"SetupEventArgs",
        description:'',
        tags:''
    });

    a({
        id:599,
        title:"RuntimeOptions",
        content:"RuntimeOptions",
        description:'',
        tags:''
    });

    a({
        id:600,
        title:"ChutzpahRunner",
        content:"ChutzpahRunner",
        description:'',
        tags:''
    });

    a({
        id:601,
        title:"NuGetPackSettings",
        content:"NuGetPackSettings",
        description:'',
        tags:''
    });

    a({
        id:602,
        title:"TravisCIInfo",
        content:"TravisCIInfo",
        description:'',
        tags:''
    });

    a({
        id:603,
        title:"GitLink Runner",
        content:"GitLink Runner",
        description:'',
        tags:''
    });

    a({
        id:604,
        title:"NpmPublishSettingsExtensions",
        content:"NpmPublishSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:605,
        title:"MobileCenterTestGenerateUitestSettings",
        content:"MobileCenterTestGenerateUitestSettings",
        description:'',
        tags:''
    });

    a({
        id:606,
        title:"NpmScriptRunner",
        content:"NpmScriptRunner",
        description:'',
        tags:''
    });

    a({
        id:607,
        title:"YarnRunSettings",
        content:"YarnRunSettings",
        description:'',
        tags:''
    });

    a({
        id:608,
        title:"NuGetPusher",
        content:"NuGetPusher",
        description:'',
        tags:''
    });

    a({
        id:609,
        title:"ToolFixtureResult",
        content:"ToolFixtureResult",
        description:'',
        tags:''
    });

    a({
        id:610,
        title:"DacAliases",
        content:"DacAliases",
        description:'',
        tags:''
    });

    a({
        id:611,
        title:"GenymotionVersionSettings",
        content:"GenymotionVersionSettings",
        description:'',
        tags:''
    });

    a({
        id:612,
        title:"DockerContainerCreateSettings",
        content:"DockerContainerCreateSettings",
        description:'',
        tags:''
    });

    a({
        id:613,
        title:"NuGetVerbosity",
        content:"NuGetVerbosity",
        description:'',
        tags:''
    });

    a({
        id:614,
        title:"ChocolateyNewSettings",
        content:"ChocolateyNewSettings",
        description:'',
        tags:''
    });

    a({
        id:615,
        title:"TerraformPlanSettings",
        content:"TerraformPlanSettings",
        description:'',
        tags:''
    });

    a({
        id:616,
        title:"DockerSwarmUpdateSettings",
        content:"DockerSwarmUpdateSettings",
        description:'',
        tags:''
    });

    a({
        id:617,
        title:"EfAliases",
        content:"EfAliases",
        description:'',
        tags:''
    });

    a({
        id:618,
        title:"CakeAliases",
        content:"CakeAliases",
        description:'',
        tags:''
    });

    a({
        id:619,
        title:"DotNetCorePublisher",
        content:"DotNetCorePublisher",
        description:'',
        tags:''
    });

    a({
        id:620,
        title:"MicrosoftTeamsAliases",
        content:"MicrosoftTeamsAliases",
        description:'',
        tags:''
    });

    a({
        id:621,
        title:"Aliases",
        content:"Aliases",
        description:'',
        tags:''
    });

    a({
        id:622,
        title:"CakeException",
        content:"CakeException",
        description:'',
        tags:''
    });

    a({
        id:623,
        title:"JenkinsInfo",
        content:"JenkinsInfo",
        description:'',
        tags:''
    });

    a({
        id:624,
        title:"ILRepackRunner",
        content:"ILRepackRunner",
        description:'',
        tags:''
    });

    a({
        id:625,
        title:"SonarScannerSettings",
        content:"SonarScannerSettings",
        description:'',
        tags:''
    });

    a({
        id:626,
        title:"AppPoolNetFxProvider",
        content:"AppPoolNetFxProvider",
        description:'',
        tags:''
    });

    a({
        id:627,
        title:"AndroidSdkDownloader",
        content:"AndroidSdkDownloader",
        description:'',
        tags:''
    });

    a({
        id:628,
        title:"TfxExtensionShareRunner",
        content:"TfxExtensionShareRunner",
        description:'',
        tags:''
    });

    a({
        id:629,
        title:"NpmInstaller",
        content:"NpmInstaller",
        description:'',
        tags:''
    });

    a({
        id:630,
        title:"MobileCenterAnalyticsAppVersionsSettings",
        content:"MobileCenterAnalyticsAppVersionsSettings",
        description:'',
        tags:''
    });

    a({
        id:631,
        title:"TransformTask",
        content:"TransformTask",
        description:'',
        tags:''
    });

    a({
        id:632,
        title:"JenkinsEnvironmentInfo",
        content:"JenkinsEnvironmentInfo",
        description:'',
        tags:''
    });

    a({
        id:633,
        title:"ICakeModule",
        content:"ICakeModule",
        description:'',
        tags:''
    });

    a({
        id:634,
        title:"GoCDPipelineHistoryInfo",
        content:"GoCDPipelineHistoryInfo",
        description:'',
        tags:''
    });

    a({
        id:635,
        title:"AppleSimulatorDeviceType",
        content:"AppleSimulatorDeviceType",
        description:'',
        tags:''
    });

    a({
        id:636,
        title:"IssueProvider",
        content:"IssueProvider",
        description:'',
        tags:''
    });

    a({
        id:637,
        title:"GlobberExtensions",
        content:"GlobberExtensions",
        description:'',
        tags:''
    });

    a({
        id:638,
        title:"NuGetAdder",
        content:"NuGetAdder",
        description:'',
        tags:''
    });

    a({
        id:639,
        title:"JenkinsJobInfo",
        content:"JenkinsJobInfo",
        description:'',
        tags:''
    });

    a({
        id:640,
        title:"NpmPackAliases",
        content:"NpmPackAliases",
        description:'',
        tags:''
    });

    a({
        id:641,
        title:"AppVeyorProviderAddMessageExtensions",
        content:"AppVeyorProviderAddMessageExtensions",
        description:'',
        tags:''
    });

    a({
        id:642,
        title:"BitriseProvisioningInfo",
        content:"BitriseProvisioningInfo",
        description:'',
        tags:''
    });

    a({
        id:643,
        title:"PullRequestIssuesException",
        content:"PullRequestIssuesException",
        description:'',
        tags:''
    });

    a({
        id:644,
        title:"GitCommit",
        content:"GitCommit",
        description:'',
        tags:''
    });

    a({
        id:645,
        title:"DocFxMetadataAliases",
        content:"DocFxMetadataAliases",
        description:'',
        tags:''
    });

    a({
        id:646,
        title:"TerraformRunner",
        content:"TerraformRunner",
        description:'',
        tags:''
    });

    a({
        id:647,
        title:"MobileCenterBuildBranchesShowSettings",
        content:"MobileCenterBuildBranchesShowSettings",
        description:'',
        tags:''
    });

    a({
        id:648,
        title:"KeyValueMapEntry",
        content:"KeyValueMapEntry",
        description:'',
        tags:''
    });

    a({
        id:649,
        title:"CakeContextExtensions",
        content:"CakeContextExtensions",
        description:'',
        tags:''
    });

    a({
        id:650,
        title:"ImportProxyResult",
        content:"ImportProxyResult",
        description:'',
        tags:''
    });

    a({
        id:651,
        title:"AppVeyorRepositoryInfo",
        content:"AppVeyorRepositoryInfo",
        description:'',
        tags:''
    });

    a({
        id:652,
        title:"NuGetRestorer",
        content:"NuGetRestorer",
        description:'',
        tags:''
    });

    a({
        id:653,
        title:"AdbLogcatBufferType",
        content:"AdbLogcatBufferType",
        description:'',
        tags:''
    });

    a({
        id:654,
        title:"DocFxGlobalMetadata",
        content:"DocFxGlobalMetadata",
        description:'',
        tags:''
    });

    a({
        id:655,
        title:"VagrantBoxUpdateSettings",
        content:"VagrantBoxUpdateSettings",
        description:'',
        tags:''
    });

    a({
        id:656,
        title:"TeardownContext",
        content:"TeardownContext",
        description:'',
        tags:''
    });

    a({
        id:657,
        title:"NpmPackSettingsExtensions",
        content:"NpmPackSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:658,
        title:"GoCDBuildCauseInfo",
        content:"GoCDBuildCauseInfo",
        description:'',
        tags:''
    });

    a({
        id:659,
        title:"CustomObjectFactory",
        content:"CustomObjectFactory",
        description:'',
        tags:''
    });

    a({
        id:660,
        title:"InspectCodeSettings",
        content:"InspectCodeSettings",
        description:'',
        tags:''
    });

    a({
        id:661,
        title:"ReportUnitSettings",
        content:"ReportUnitSettings",
        description:'',
        tags:''
    });

    a({
        id:662,
        title:"NuGetTool",
        content:"NuGetTool",
        description:'',
        tags:''
    });

    a({
        id:663,
        title:"ToolSettings",
        content:"ToolSettings",
        description:'',
        tags:''
    });

    a({
        id:664,
        title:"WyamRunner",
        content:"WyamRunner",
        description:'',
        tags:''
    });

    a({
        id:665,
        title:"VSToolSetupSettings",
        content:"VSToolSetupSettings",
        description:'',
        tags:''
    });

    a({
        id:666,
        title:"CodecovSettings",
        content:"CodecovSettings",
        description:'',
        tags:''
    });

    a({
        id:667,
        title:"FileHash",
        content:"FileHash",
        description:'',
        tags:''
    });

    a({
        id:668,
        title:"CakeTask",
        content:"CakeTask",
        description:'',
        tags:''
    });

    a({
        id:669,
        title:"BuildSystemAliases",
        content:"BuildSystemAliases",
        description:'',
        tags:''
    });

    a({
        id:670,
        title:"Zip",
        content:"Zip",
        description:'',
        tags:''
    });

    a({
        id:671,
        title:"MakeNSISSettings",
        content:"MakeNSISSettings",
        description:'',
        tags:''
    });

    a({
        id:672,
        title:"HttpAliases",
        content:"HttpAliases",
        description:'',
        tags:''
    });

    a({
        id:673,
        title:"Protocol",
        content:"Protocol",
        description:'',
        tags:''
    });

    a({
        id:674,
        title:"NuGetModule",
        content:"NuGetModule",
        description:'',
        tags:''
    });

    a({
        id:675,
        title:"ZipAliases",
        content:"ZipAliases",
        description:'',
        tags:''
    });

    a({
        id:676,
        title:"UserDelete",
        content:"UserDelete",
        description:'',
        tags:''
    });

    a({
        id:677,
        title:"TeardownEventArgs",
        content:"TeardownEventArgs",
        description:'',
        tags:''
    });

    a({
        id:678,
        title:"WebpackRunnerSettings",
        content:"WebpackRunnerSettings",
        description:'',
        tags:''
    });

    a({
        id:679,
        title:"GoCDProvider",
        content:"GoCDProvider",
        description:'',
        tags:''
    });

    a({
        id:680,
        title:"ICakeRegistrationBuilder",
        content:"ICakeRegistrationBuilder",
        description:'',
        tags:''
    });

    a({
        id:681,
        title:"SshVersion",
        content:"SshVersion",
        description:'',
        tags:''
    });

    a({
        id:682,
        title:"DotNetCoreEfDatabaseUpdater",
        content:"DotNetCoreEfDatabaseUpdater",
        description:'',
        tags:''
    });

    a({
        id:683,
        title:"FilePath",
        content:"FilePath",
        description:'',
        tags:''
    });

    a({
        id:684,
        title:"DockerContainerRmSettings",
        content:"DockerContainerRmSettings",
        description:'',
        tags:''
    });

    a({
        id:685,
        title:"GitMergeStatus",
        content:"GitMergeStatus",
        description:'',
        tags:''
    });

    a({
        id:686,
        title:"WindowsTheory",
        content:"WindowsTheory",
        description:'',
        tags:''
    });

    a({
        id:687,
        title:"VagrantInitSettingsExtensions",
        content:"VagrantInitSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:688,
        title:"CakeTaskBuilderExtensions",
        content:"CakeTaskBuilderExtensions",
        description:'',
        tags:''
    });

    a({
        id:689,
        title:"XmlDocument",
        content:"XmlDocument",
        description:'',
        tags:''
    });

    a({
        id:690,
        title:"ExtractDacpacSettings",
        content:"ExtractDacpacSettings",
        description:'',
        tags:''
    });

    a({
        id:691,
        title:"GulpGlobalRunner",
        content:"GulpGlobalRunner",
        description:'',
        tags:''
    });

    a({
        id:692,
        title:"AppVeyorUploadArtifactsSettings",
        content:"AppVeyorUploadArtifactsSettings",
        description:'',
        tags:''
    });

    a({
        id:693,
        title:"Transformer",
        content:"Transformer",
        description:'',
        tags:''
    });

    a({
        id:694,
        title:"DotNetCoreTestSettings",
        content:"DotNetCoreTestSettings",
        description:'',
        tags:''
    });

    a({
        id:695,
        title:"ChocolateyInstallSettings",
        content:"ChocolateyInstallSettings",
        description:'',
        tags:''
    });

    a({
        id:696,
        title:"AndroidSdkPackage",
        content:"AndroidSdkPackage",
        description:'',
        tags:''
    });

    a({
        id:697,
        title:"DockerSwarmLeaveSettings",
        content:"DockerSwarmLeaveSettings",
        description:'',
        tags:''
    });

    a({
        id:698,
        title:"MethodAliasGenerator",
        content:"MethodAliasGenerator",
        description:'',
        tags:''
    });

    a({
        id:699,
        title:"PdfGenerator",
        content:"PdfGenerator",
        description:'',
        tags:''
    });

    a({
        id:700,
        title:"DotNetCoreEfAliases",
        content:"DotNetCoreEfAliases",
        description:'',
        tags:''
    });

    a({
        id:701,
        title:"TeamCityPullRequestInfo",
        content:"TeamCityPullRequestInfo",
        description:'',
        tags:''
    });

    a({
        id:702,
        title:"SpecFlowSettings",
        content:"SpecFlowSettings",
        description:'',
        tags:''
    });

    a({
        id:703,
        title:"ApiProxyMetadata",
        content:"ApiProxyMetadata",
        description:'',
        tags:''
    });

    a({
        id:704,
        title:"StrongNameResolver",
        content:"StrongNameResolver",
        description:'',
        tags:''
    });

    a({
        id:705,
        title:"IScriptInformation",
        content:"IScriptInformation",
        description:'',
        tags:''
    });

    a({
        id:706,
        title:"BoolParameterAttribute",
        content:"BoolParameterAttribute",
        description:'',
        tags:''
    });

    a({
        id:707,
        title:"DockerImageRemoveSettings",
        content:"DockerImageRemoveSettings",
        description:'',
        tags:''
    });

    a({
        id:708,
        title:"StorytellerRunner",
        content:"StorytellerRunner",
        description:'',
        tags:''
    });

    a({
        id:709,
        title:"ICakeLog",
        content:"ICakeLog",
        description:'',
        tags:''
    });

    a({
        id:710,
        title:"FixieSettingsExtensions",
        content:"FixieSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:711,
        title:"ILMergeSettings",
        content:"ILMergeSettings",
        description:'',
        tags:''
    });

    a({
        id:712,
        title:"TeamCityEnvironmentInfo",
        content:"TeamCityEnvironmentInfo",
        description:'',
        tags:''
    });

    a({
        id:713,
        title:"AppleSimulatorPairedWatch",
        content:"AppleSimulatorPairedWatch",
        description:'',
        tags:''
    });

    a({
        id:714,
        title:"ApigeeAliases",
        content:"ApigeeAliases",
        description:'',
        tags:''
    });

    a({
        id:715,
        title:"LoadBalancingAliases",
        content:"LoadBalancingAliases",
        description:'',
        tags:''
    });

    a({
        id:716,
        title:"VagrantProvisionerSettingsExtensions",
        content:"VagrantProvisionerSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:717,
        title:"XCodeAliases",
        content:"XCodeAliases",
        description:'',
        tags:''
    });

    a({
        id:718,
        title:"SonarRunner",
        content:"SonarRunner",
        description:'',
        tags:''
    });

    a({
        id:719,
        title:"AppVeyorEnvironmentDeployments",
        content:"AppVeyorEnvironmentDeployments",
        description:'',
        tags:''
    });

    a({
        id:720,
        title:"DotNetCoreNuGetPusher",
        content:"DotNetCoreNuGetPusher",
        description:'',
        tags:''
    });

    a({
        id:721,
        title:"GenymotionAdminSettings",
        content:"GenymotionAdminSettings",
        description:'',
        tags:''
    });

    a({
        id:722,
        title:"CreateKeyValueMapSettings",
        content:"CreateKeyValueMapSettings",
        description:'',
        tags:''
    });

    a({
        id:723,
        title:"MobileCenterBuildDownloadSettings",
        content:"MobileCenterBuildDownloadSettings",
        description:'',
        tags:''
    });

    a({
        id:724,
        title:"VSTestSettings",
        content:"VSTestSettings",
        description:'',
        tags:''
    });

    a({
        id:725,
        title:"PlatformFamily",
        content:"PlatformFamily",
        description:'',
        tags:''
    });

    a({
        id:726,
        title:"SonarScannerAliases",
        content:"SonarScannerAliases",
        description:'',
        tags:''
    });

    a({
        id:727,
        title:"MakeNSISRunner",
        content:"MakeNSISRunner",
        description:'',
        tags:''
    });

    a({
        id:728,
        title:"PullRequestSystem",
        content:"PullRequestSystem",
        description:'',
        tags:''
    });

    a({
        id:729,
        title:"ProcessSettingsExtensions",
        content:"ProcessSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:730,
        title:"OctopusDeploySettings",
        content:"OctopusDeploySettings",
        description:'',
        tags:''
    });

    a({
        id:731,
        title:"DotNetBuildAliases",
        content:"DotNetBuildAliases",
        description:'',
        tags:''
    });

    a({
        id:732,
        title:"WebpackGlobalRunner",
        content:"WebpackGlobalRunner",
        description:'',
        tags:''
    });

    a({
        id:733,
        title:"IgnoreCaseComparer",
        content:"IgnoreCaseComparer",
        description:'',
        tags:''
    });

    a({
        id:734,
        title:"CloudFrontSettings",
        content:"CloudFrontSettings",
        description:'',
        tags:''
    });

    a({
        id:735,
        title:"GitRemote",
        content:"GitRemote",
        description:'',
        tags:''
    });

    a({
        id:736,
        title:"GitLabCIProjectInfo",
        content:"GitLabCIProjectInfo",
        description:'',
        tags:''
    });

    a({
        id:737,
        title:"BitriseBuildInfo",
        content:"BitriseBuildInfo",
        description:'',
        tags:''
    });

    a({
        id:738,
        title:"FilePathExtensions",
        content:"FilePathExtensions",
        description:'',
        tags:''
    });

    a({
        id:739,
        title:"MobileCenterAppsSetCurrentSettings",
        content:"MobileCenterAppsSetCurrentSettings",
        description:'',
        tags:''
    });

    a({
        id:740,
        title:"Tool",
        content:"Tool",
        description:'',
        tags:''
    });

    a({
        id:741,
        title:"IArgumentParser",
        content:"IArgumentParser",
        description:'',
        tags:''
    });

    a({
        id:742,
        title:"LogActionEntry",
        content:"LogActionEntry",
        description:'',
        tags:''
    });

    a({
        id:743,
        title:"SpecFlowTestExecutionReporter",
        content:"SpecFlowTestExecutionReporter",
        description:'',
        tags:''
    });

    a({
        id:744,
        title:"AppVeyorBuild",
        content:"AppVeyorBuild",
        description:'',
        tags:''
    });

    a({
        id:745,
        title:"ScriptAliasFinder",
        content:"ScriptAliasFinder",
        description:'',
        tags:''
    });

    a({
        id:746,
        title:"UrlScanConfigProvider",
        content:"UrlScanConfigProvider",
        description:'',
        tags:''
    });

    a({
        id:747,
        title:"PackageReference",
        content:"PackageReference",
        description:'',
        tags:''
    });

    a({
        id:748,
        title:"IDirectory",
        content:"IDirectory",
        description:'',
        tags:''
    });

    a({
        id:749,
        title:"ResxConverter",
        content:"ResxConverter",
        description:'',
        tags:''
    });

    a({
        id:750,
        title:"MsDeployProvider",
        content:"MsDeployProvider",
        description:'',
        tags:''
    });

    a({
        id:751,
        title:"VsMetricsToolVersion",
        content:"VsMetricsToolVersion",
        description:'',
        tags:''
    });

    a({
        id:752,
        title:"GitReleaseManagerCreator",
        content:"GitReleaseManagerCreator",
        description:'',
        tags:''
    });

    a({
        id:753,
        title:"EmberBuildRunner",
        content:"EmberBuildRunner",
        description:'',
        tags:''
    });

    a({
        id:754,
        title:"DotCoverAliases",
        content:"DotCoverAliases",
        description:'',
        tags:''
    });

    a({
        id:755,
        title:"TypeScriptGeneratorSettings",
        content:"TypeScriptGeneratorSettings",
        description:'',
        tags:''
    });

    a({
        id:756,
        title:"SolutionProject",
        content:"SolutionProject",
        description:'',
        tags:''
    });

    a({
        id:757,
        title:"MobileCenterTestRunXcuitestSettings",
        content:"MobileCenterTestRunXcuitestSettings",
        description:'',
        tags:''
    });

    a({
        id:758,
        title:"BaseIssueComponent",
        content:"BaseIssueComponent",
        description:'',
        tags:''
    });

    a({
        id:759,
        title:"ChocolateyUninstaller",
        content:"ChocolateyUninstaller",
        description:'',
        tags:''
    });

    a({
        id:760,
        title:"NuGetSettings",
        content:"NuGetSettings",
        description:'',
        tags:''
    });

    a({
        id:761,
        title:"MSTestAliases",
        content:"MSTestAliases",
        description:'',
        tags:''
    });

    a({
        id:762,
        title:"BambooInfo",
        content:"BambooInfo",
        description:'',
        tags:''
    });

    a({
        id:763,
        title:"AssemblySource",
        content:"AssemblySource",
        description:'',
        tags:''
    });

    a({
        id:764,
        title:"AndroidSdkManagerList",
        content:"AndroidSdkManagerList",
        description:'',
        tags:''
    });

    a({
        id:765,
        title:"GenericDockerComposeRunner",
        content:"GenericDockerComposeRunner",
        description:'',
        tags:''
    });

    a({
        id:766,
        title:"XCodeBuildSettings",
        content:"XCodeBuildSettings",
        description:'',
        tags:''
    });

    a({
        id:767,
        title:"CodeGenerator",
        content:"CodeGenerator",
        description:'',
        tags:''
    });

    a({
        id:768,
        title:"Aliases",
        content:"Aliases",
        description:'',
        tags:''
    });

    a({
        id:769,
        title:"INuGetPackageInstaller",
        content:"INuGetPackageInstaller",
        description:'',
        tags:''
    });

    a({
        id:770,
        title:"MsSqlQueryRepository",
        content:"MsSqlQueryRepository",
        description:'',
        tags:''
    });

    a({
        id:771,
        title:"YarnPackSettings",
        content:"YarnPackSettings",
        description:'',
        tags:''
    });

    a({
        id:772,
        title:"NUnit Runner",
        content:"NUnit Runner",
        description:'',
        tags:''
    });

    a({
        id:773,
        title:"ContentPathLibProvider",
        content:"ContentPathLibProvider",
        description:'',
        tags:''
    });

    a({
        id:774,
        title:"DotCoverCoverSettings",
        content:"DotCoverCoverSettings",
        description:'',
        tags:''
    });

    a({
        id:775,
        title:"HashAlgorithm",
        content:"HashAlgorithm",
        description:'',
        tags:''
    });

    a({
        id:776,
        title:"SkipDirective",
        content:"SkipDirective",
        description:'',
        tags:''
    });

    a({
        id:777,
        title:"NpmLogLevel",
        content:"NpmLogLevel",
        description:'',
        tags:''
    });

    a({
        id:778,
        title:"MSBuildLogger",
        content:"MSBuildLogger",
        description:'',
        tags:''
    });

    a({
        id:779,
        title:"TerraformApplySettings",
        content:"TerraformApplySettings",
        description:'',
        tags:''
    });

    a({
        id:780,
        title:"VSWhereLatest",
        content:"VSWhereLatest",
        description:'',
        tags:''
    });

    a({
        id:781,
        title:"TfxExtensionCreateRunner",
        content:"TfxExtensionCreateRunner",
        description:'',
        tags:''
    });

    a({
        id:782,
        title:"WebpackRunner",
        content:"WebpackRunner",
        description:'',
        tags:''
    });

    a({
        id:783,
        title:"EmberBuildSettings",
        content:"EmberBuildSettings",
        description:'',
        tags:''
    });

    a({
        id:784,
        title:"EmailAliases",
        content:"EmailAliases",
        description:'',
        tags:''
    });

    a({
        id:785,
        title:"DotNetCoreRunSettings",
        content:"DotNetCoreRunSettings",
        description:'',
        tags:''
    });

    a({
        id:786,
        title:"YarnInstallSettings",
        content:"YarnInstallSettings",
        description:'',
        tags:''
    });

    a({
        id:787,
        title:"SwaggerGeneratorSettings",
        content:"SwaggerGeneratorSettings",
        description:'',
        tags:''
    });

    a({
        id:788,
        title:"XBuildRunner",
        content:"XBuildRunner",
        description:'',
        tags:''
    });

    a({
        id:789,
        title:"Logger",
        content:"Logger",
        description:'',
        tags:''
    });

    a({
        id:790,
        title:"GitReleaseNotesIssueTracker",
        content:"GitReleaseNotesIssueTracker",
        description:'',
        tags:''
    });

    a({
        id:791,
        title:"YarnRemoveSettings",
        content:"YarnRemoveSettings",
        description:'',
        tags:''
    });

    a({
        id:792,
        title:"DotCoverCoverageSettingsExtensions",
        content:"DotCoverCoverageSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:793,
        title:"INuGetToolResolver",
        content:"INuGetToolResolver",
        description:'',
        tags:''
    });

    a({
        id:794,
        title:"AdbAliases",
        content:"AdbAliases",
        description:'',
        tags:''
    });

    a({
        id:795,
        title:"ChocolateyUninstallSettings",
        content:"ChocolateyUninstallSettings",
        description:'',
        tags:''
    });

    a({
        id:796,
        title:"IYarnRunnerConfiguration",
        content:"IYarnRunnerConfiguration",
        description:'',
        tags:''
    });

    a({
        id:797,
        title:"MobileCenterProfileUpdateSettings",
        content:"MobileCenterProfileUpdateSettings",
        description:'',
        tags:''
    });

    a({
        id:798,
        title:"ITravisCIProvider",
        content:"ITravisCIProvider",
        description:'',
        tags:''
    });

    a({
        id:799,
        title:"AppleSimulatorConfigurationSettings",
        content:"AppleSimulatorConfigurationSettings",
        description:'',
        tags:''
    });

    a({
        id:800,
        title:"OctopusPackFormat",
        content:"OctopusPackFormat",
        description:'',
        tags:''
    });

    a({
        id:801,
        title:"TopshelfSettings",
        content:"TopshelfSettings",
        description:'',
        tags:''
    });

    a({
        id:802,
        title:"XmlPeekSettings",
        content:"XmlPeekSettings",
        description:'',
        tags:''
    });

    a({
        id:803,
        title:"PdfSettings",
        content:"PdfSettings",
        description:'',
        tags:''
    });

    a({
        id:804,
        title:"ScriptHost",
        content:"ScriptHost",
        description:'',
        tags:''
    });

    a({
        id:805,
        title:"FileHelperAliases",
        content:"FileHelperAliases",
        description:'',
        tags:''
    });

    a({
        id:806,
        title:"DockerComposeRmSettings",
        content:"DockerComposeRmSettings",
        description:'',
        tags:''
    });

    a({
        id:807,
        title:"DirPathProvider",
        content:"DirPathProvider",
        description:'',
        tags:''
    });

    a({
        id:808,
        title:"ICommandFactory",
        content:"ICommandFactory",
        description:'',
        tags:''
    });

    a({
        id:809,
        title:"ICommand",
        content:"ICommand",
        description:'',
        tags:''
    });

    a({
        id:810,
        title:"CakeEnvironmentExtensions",
        content:"CakeEnvironmentExtensions",
        description:'',
        tags:''
    });

    a({
        id:811,
        title:"ILRepackSettings",
        content:"ILRepackSettings",
        description:'',
        tags:''
    });

    a({
        id:812,
        title:"MobileCenterAnalyticsEventsDeleteSettings",
        content:"MobileCenterAnalyticsEventsDeleteSettings",
        description:'',
        tags:''
    });

    a({
        id:813,
        title:"XUnit Runner",
        content:"XUnit Runner",
        description:'',
        tags:''
    });

    a({
        id:814,
        title:"ToolRepository",
        content:"ToolRepository",
        description:'',
        tags:''
    });

    a({
        id:815,
        title:"FtpClient",
        content:"FtpClient",
        description:'',
        tags:''
    });

    a({
        id:816,
        title:"ChocolateyConfigSettings",
        content:"ChocolateyConfigSettings",
        description:'',
        tags:''
    });

    a({
        id:817,
        title:"DryRunScriptHost",
        content:"DryRunScriptHost",
        description:'',
        tags:''
    });

    a({
        id:818,
        title:"AuthenticationScheme",
        content:"AuthenticationScheme",
        description:'',
        tags:''
    });

    a({
        id:819,
        title:"DirectoryAliases",
        content:"DirectoryAliases",
        description:'',
        tags:''
    });

    a({
        id:820,
        title:"DotNetCoreCleanSettings",
        content:"DotNetCoreCleanSettings",
        description:'',
        tags:''
    });

    a({
        id:821,
        title:"VsixSignToolSignSettings",
        content:"VsixSignToolSignSettings",
        description:'',
        tags:''
    });

    a({
        id:822,
        title:"FakeLog",
        content:"FakeLog",
        description:'',
        tags:''
    });

    a({
        id:823,
        title:"YarnCacheSettings",
        content:"YarnCacheSettings",
        description:'',
        tags:''
    });

    a({
        id:824,
        title:"IContinuaCIProvider",
        content:"IContinuaCIProvider",
        description:'',
        tags:''
    });

    a({
        id:825,
        title:"TFBuildTeamProjectInfo",
        content:"TFBuildTeamProjectInfo",
        description:'',
        tags:''
    });

    a({
        id:826,
        title:"TFBuildTaskResult",
        content:"TFBuildTaskResult",
        description:'',
        tags:''
    });

    a({
        id:827,
        title:"VagrantSSHSettings",
        content:"VagrantSSHSettings",
        description:'',
        tags:''
    });

    a({
        id:828,
        title:"FakeIssueComponent",
        content:"FakeIssueComponent",
        description:'',
        tags:''
    });

    a({
        id:829,
        title:"ExceptionAssertExtensions",
        content:"ExceptionAssertExtensions",
        description:'',
        tags:''
    });

    a({
        id:830,
        title:"EmptySettings",
        content:"EmptySettings",
        description:'',
        tags:''
    });

    a({
        id:831,
        title:"TFBuildCommands",
        content:"TFBuildCommands",
        description:'',
        tags:''
    });

    a({
        id:832,
        title:"ApigeeProxyManagementService",
        content:"ApigeeProxyManagementService",
        description:'',
        tags:''
    });

    a({
        id:833,
        title:"SolutionAliases",
        content:"SolutionAliases",
        description:'',
        tags:''
    });

    a({
        id:834,
        title:"DockerImageBuildSettings",
        content:"DockerImageBuildSettings",
        description:'',
        tags:''
    });

    a({
        id:835,
        title:"ResxConverterOutputFactory",
        content:"ResxConverterOutputFactory",
        description:'',
        tags:''
    });

    a({
        id:836,
        title:"CloudFrontManager",
        content:"CloudFrontManager",
        description:'',
        tags:''
    });

    a({
        id:837,
        title:"VagrantSSHSettingsExtensions",
        content:"VagrantSSHSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:838,
        title:"SolutionParser",
        content:"SolutionParser",
        description:'',
        tags:''
    });

    a({
        id:839,
        title:"InspectCodeIssuesSettings",
        content:"InspectCodeIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:840,
        title:"ToolLocator",
        content:"ToolLocator",
        description:'',
        tags:''
    });

    a({
        id:841,
        title:"ProjectParserExtensions",
        content:"ProjectParserExtensions",
        description:'',
        tags:''
    });

    a({
        id:842,
        title:"RoundhouseRunner",
        content:"RoundhouseRunner",
        description:'',
        tags:''
    });

    a({
        id:843,
        title:"GlobbingAliases",
        content:"GlobbingAliases",
        description:'',
        tags:''
    });

    a({
        id:844,
        title:"TransifexPullSettings",
        content:"TransifexPullSettings",
        description:'',
        tags:''
    });

    a({
        id:845,
        title:"StringExtensions",
        content:"StringExtensions",
        description:'',
        tags:''
    });

    a({
        id:846,
        title:"TwitterAliases",
        content:"TwitterAliases",
        description:'',
        tags:''
    });

    a({
        id:847,
        title:"ChocolateyDownloader",
        content:"ChocolateyDownloader",
        description:'',
        tags:''
    });

    a({
        id:848,
        title:"IRegistryKey",
        content:"IRegistryKey",
        description:'',
        tags:''
    });

    a({
        id:849,
        title:"GitCloneSettings",
        content:"GitCloneSettings",
        description:'',
        tags:''
    });

    a({
        id:850,
        title:"DotNetCoreEfSettings",
        content:"DotNetCoreEfSettings",
        description:'',
        tags:''
    });

    a({
        id:851,
        title:"TfsPullRequestVote",
        content:"TfsPullRequestVote",
        description:'',
        tags:''
    });

    a({
        id:852,
        title:"TopshelfSettingsExtensions",
        content:"TopshelfSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:853,
        title:"FilePathCollection",
        content:"FilePathCollection",
        description:'',
        tags:''
    });

    a({
        id:854,
        title:"AppleSimulatorGraphicsQuality",
        content:"AppleSimulatorGraphicsQuality",
        description:'',
        tags:''
    });

    a({
        id:855,
        title:"InspectCodeIssuesAliases",
        content:"InspectCodeIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:856,
        title:"BitriseApplicationInfo",
        content:"BitriseApplicationInfo",
        description:'',
        tags:''
    });

    a({
        id:857,
        title:"AssemblyInfoCustomAttribute",
        content:"AssemblyInfoCustomAttribute",
        description:'',
        tags:''
    });

    a({
        id:858,
        title:"MobileCenterTestPrepareEspressoSettings",
        content:"MobileCenterTestPrepareEspressoSettings",
        description:'',
        tags:''
    });

    a({
        id:859,
        title:"JenkinsRepositoryInfo",
        content:"JenkinsRepositoryInfo",
        description:'',
        tags:''
    });

    a({
        id:860,
        title:"TerraformEnvSelectRunner",
        content:"TerraformEnvSelectRunner",
        description:'',
        tags:''
    });

    a({
        id:861,
        title:"AndroidResxConverterOutput",
        content:"AndroidResxConverterOutput",
        description:'',
        tags:''
    });

    a({
        id:862,
        title:"TfxExtensionCreateSettings",
        content:"TfxExtensionCreateSettings",
        description:'',
        tags:''
    });

    a({
        id:863,
        title:"TestCloudSettings",
        content:"TestCloudSettings",
        description:'',
        tags:''
    });

    a({
        id:864,
        title:"XmlPokeSettings",
        content:"XmlPokeSettings",
        description:'',
        tags:''
    });

    a({
        id:865,
        title:"VSWhereLatestSettings",
        content:"VSWhereLatestSettings",
        description:'',
        tags:''
    });

    a({
        id:866,
        title:"NuGetAliases",
        content:"NuGetAliases",
        description:'',
        tags:''
    });

    a({
        id:867,
        title:"SendGridResult",
        content:"SendGridResult",
        description:'',
        tags:''
    });

    a({
        id:868,
        title:"ChocolateyNuSpecContent",
        content:"ChocolateyNuSpecContent",
        description:'',
        tags:''
    });

    a({
        id:869,
        title:"AutoPropertyAttribute",
        content:"AutoPropertyAttribute",
        description:'',
        tags:''
    });

    a({
        id:870,
        title:"AppVeyorProjectDeployment",
        content:"AppVeyorProjectDeployment",
        description:'',
        tags:''
    });

    a({
        id:871,
        title:"AppVeyorJob",
        content:"AppVeyorJob",
        description:'',
        tags:''
    });

    a({
        id:872,
        title:"DotNetCoreVerbosity",
        content:"DotNetCoreVerbosity",
        description:'',
        tags:''
    });

    a({
        id:873,
        title:"ScriptAliasType",
        content:"ScriptAliasType",
        description:'',
        tags:''
    });

    a({
        id:874,
        title:"MobileCenterDistributeGroupsDeleteSettings",
        content:"MobileCenterDistributeGroupsDeleteSettings",
        description:'',
        tags:''
    });

    a({
        id:875,
        title:"DeployManager",
        content:"DeployManager",
        description:'',
        tags:''
    });

    a({
        id:876,
        title:"XamarinComponentCredentialSettings",
        content:"XamarinComponentCredentialSettings",
        description:'',
        tags:''
    });

    a({
        id:877,
        title:"ReleaseNotes",
        content:"ReleaseNotes",
        description:'',
        tags:''
    });

    a({
        id:878,
        title:"CakeContextAdapter",
        content:"CakeContextAdapter",
        description:'',
        tags:''
    });

    a({
        id:879,
        title:"SpecialPath",
        content:"SpecialPath",
        description:'',
        tags:''
    });

    a({
        id:880,
        title:"GitterChatProvider",
        content:"GitterChatProvider",
        description:'',
        tags:''
    });

    a({
        id:881,
        title:"VagrantPowerShellSettingsExtensions",
        content:"VagrantPowerShellSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:882,
        title:"IConsole",
        content:"IConsole",
        description:'',
        tags:''
    });

    a({
        id:883,
        title:"WatchSettings",
        content:"WatchSettings",
        description:'',
        tags:''
    });

    a({
        id:884,
        title:"VagrantPluginRunner",
        content:"VagrantPluginRunner",
        description:'',
        tags:''
    });

    a({
        id:885,
        title:"AndroidSdkManagerToolSettings",
        content:"AndroidSdkManagerToolSettings",
        description:'',
        tags:''
    });

    a({
        id:886,
        title:"AppBundler",
        content:"AppBundler",
        description:'',
        tags:''
    });

    a({
        id:887,
        title:"DacpacAction",
        content:"DacpacAction",
        description:'',
        tags:''
    });

    a({
        id:888,
        title:"GemPushRunner",
        content:"GemPushRunner",
        description:'',
        tags:''
    });

    a({
        id:889,
        title:"ArgumentsBuilderExtension",
        content:"ArgumentsBuilderExtension",
        description:'',
        tags:''
    });

    a({
        id:890,
        title:"YarnVersionSettings",
        content:"YarnVersionSettings",
        description:'',
        tags:''
    });

    a({
        id:891,
        title:"VagrantSnapshotRunner",
        content:"VagrantSnapshotRunner",
        description:'',
        tags:''
    });

    a({
        id:892,
        title:"NuGetIniter",
        content:"NuGetIniter",
        description:'',
        tags:''
    });

    a({
        id:893,
        title:"DotNetCorePackSettings",
        content:"DotNetCorePackSettings",
        description:'',
        tags:''
    });

    a({
        id:894,
        title:"ReSharperReportsRunner",
        content:"ReSharperReportsRunner",
        description:'',
        tags:''
    });

    a({
        id:895,
        title:"MarkdownToPdfAliases",
        content:"MarkdownToPdfAliases",
        description:'',
        tags:''
    });

    a({
        id:896,
        title:"AppVeyorProjectDeployments",
        content:"AppVeyorProjectDeployments",
        description:'',
        tags:''
    });

    a({
        id:897,
        title:"Logger",
        content:"Logger",
        description:'',
        tags:''
    });

    a({
        id:898,
        title:"NpmInstallSettings",
        content:"NpmInstallSettings",
        description:'',
        tags:''
    });

    a({
        id:899,
        title:"SignToolSignAliases",
        content:"SignToolSignAliases",
        description:'',
        tags:''
    });

    a({
        id:900,
        title:"VagrantBoxRunner",
        content:"VagrantBoxRunner",
        description:'',
        tags:''
    });

    a({
        id:901,
        title:"DotNetCoreNuGetDeleter",
        content:"DotNetCoreNuGetDeleter",
        description:'',
        tags:''
    });

    a({
        id:902,
        title:"AutoRestSettingsExtensions",
        content:"AutoRestSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:903,
        title:"BambooBuildInfo",
        content:"BambooBuildInfo",
        description:'',
        tags:''
    });

    a({
        id:904,
        title:"FixieAliases",
        content:"FixieAliases",
        description:'',
        tags:''
    });

    a({
        id:905,
        title:"WiXGenerateType",
        content:"WiXGenerateType",
        description:'',
        tags:''
    });

    a({
        id:906,
        title:"GitVersion",
        content:"GitVersion",
        description:'',
        tags:''
    });

    a({
        id:907,
        title:"SetAclProvider",
        content:"SetAclProvider",
        description:'',
        tags:''
    });

    a({
        id:908,
        title:"DockerImageLoadSettings",
        content:"DockerImageLoadSettings",
        description:'',
        tags:''
    });

    a({
        id:909,
        title:"CakeContextExtensions",
        content:"CakeContextExtensions",
        description:'',
        tags:''
    });

    a({
        id:910,
        title:"MobileCenterDistributeGroupsUpdateSettings",
        content:"MobileCenterDistributeGroupsUpdateSettings",
        description:'',
        tags:''
    });

    a({
        id:911,
        title:"GitterAliases",
        content:"GitterAliases",
        description:'',
        tags:''
    });

    a({
        id:912,
        title:"PullRequestDiscussionStatus",
        content:"PullRequestDiscussionStatus",
        description:'',
        tags:''
    });

    a({
        id:913,
        title:"BackupAliases",
        content:"BackupAliases",
        description:'',
        tags:''
    });

    a({
        id:914,
        title:"DotCoverAnalyseSettings",
        content:"DotCoverAnalyseSettings",
        description:'',
        tags:''
    });

    a({
        id:915,
        title:"XBuildSettingsExtensions",
        content:"XBuildSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:916,
        title:"CodeDeployAliases",
        content:"CodeDeployAliases",
        description:'',
        tags:''
    });

    a({
        id:917,
        title:"SemVerAliases",
        content:"SemVerAliases",
        description:'',
        tags:''
    });

    a({
        id:918,
        title:"BambooCustomBuildInfo",
        content:"BambooCustomBuildInfo",
        description:'',
        tags:''
    });

    a({
        id:919,
        title:"MobileCenterAppsListSettings",
        content:"MobileCenterAppsListSettings",
        description:'',
        tags:''
    });

    a({
        id:920,
        title:"TeamCityDisposableExtensions",
        content:"TeamCityDisposableExtensions",
        description:'',
        tags:''
    });

    a({
        id:921,
        title:"GitPackagerRunner",
        content:"GitPackagerRunner",
        description:'',
        tags:''
    });

    a({
        id:922,
        title:"BaseSettings",
        content:"BaseSettings",
        description:'',
        tags:''
    });

    a({
        id:923,
        title:"MobileCenterTestPrepareCalabashSettings",
        content:"MobileCenterTestPrepareCalabashSettings",
        description:'',
        tags:''
    });

    a({
        id:924,
        title:"PullRequestIssueResult",
        content:"PullRequestIssueResult",
        description:'',
        tags:''
    });

    a({
        id:925,
        title:"InstallSettingsExtensions",
        content:"InstallSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:926,
        title:"IChocolateyToolResolver",
        content:"IChocolateyToolResolver",
        description:'',
        tags:''
    });

    a({
        id:927,
        title:"NewmanAliases",
        content:"NewmanAliases",
        description:'',
        tags:''
    });

    a({
        id:928,
        title:"EmailProvider",
        content:"EmailProvider",
        description:'',
        tags:''
    });

    a({
        id:929,
        title:"DownloadSettings",
        content:"DownloadSettings",
        description:'',
        tags:''
    });

    a({
        id:930,
        title:"OctopusDeployReleaseCreator",
        content:"OctopusDeployReleaseCreator",
        description:'',
        tags:''
    });

    a({
        id:931,
        title:"TransifexPushSettings",
        content:"TransifexPushSettings",
        description:'',
        tags:''
    });

    a({
        id:932,
        title:"TerraformEnvDeleteSettings",
        content:"TerraformEnvDeleteSettings",
        description:'',
        tags:''
    });

    a({
        id:933,
        title:"Verbosity",
        content:"Verbosity",
        description:'',
        tags:''
    });

    a({
        id:934,
        title:"ChocolateyPinSettings",
        content:"ChocolateyPinSettings",
        description:'',
        tags:''
    });

    a({
        id:935,
        title:"SolutionParserResult",
        content:"SolutionParserResult",
        description:'',
        tags:''
    });

    a({
        id:936,
        title:"JsonSchemaSource",
        content:"JsonSchemaSource",
        description:'',
        tags:''
    });

    a({
        id:937,
        title:"GitLabCIEnvironmentInfo",
        content:"GitLabCIEnvironmentInfo",
        description:'',
        tags:''
    });

    a({
        id:938,
        title:"MsBuildIssuesSettings",
        content:"MsBuildIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:939,
        title:"SquirrelRunner",
        content:"SquirrelRunner",
        description:'',
        tags:''
    });

    a({
        id:940,
        title:"TfxExtensionPublishRunner",
        content:"TfxExtensionPublishRunner",
        description:'',
        tags:''
    });

    a({
        id:941,
        title:"FakeLogMessage",
        content:"FakeLogMessage",
        description:'',
        tags:''
    });

    a({
        id:942,
        title:"NullLog",
        content:"NullLog",
        description:'',
        tags:''
    });

    a({
        id:943,
        title:"PaketAliases",
        content:"PaketAliases",
        description:'',
        tags:''
    });

    a({
        id:944,
        title:"SwitchArgument",
        content:"SwitchArgument",
        description:'',
        tags:''
    });

    a({
        id:945,
        title:"GemTool",
        content:"GemTool",
        description:'',
        tags:''
    });

    a({
        id:946,
        title:"XCodeBuildSettings ExportFormatType",
        content:"XCodeBuildSettings ExportFormatType",
        description:'',
        tags:''
    });

    a({
        id:947,
        title:"NuGetListItem",
        content:"NuGetListItem",
        description:'',
        tags:''
    });

    a({
        id:948,
        title:"ElasticBeanstalkSettings",
        content:"ElasticBeanstalkSettings",
        description:'',
        tags:''
    });

    a({
        id:949,
        title:"NuGetPacker",
        content:"NuGetPacker",
        description:'',
        tags:''
    });

    a({
        id:950,
        title:"AssemblyInfoSettingsExtensions",
        content:"AssemblyInfoSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:951,
        title:"IDocument",
        content:"IDocument",
        description:'',
        tags:''
    });

    a({
        id:952,
        title:"DotNetCoreEfContextSettings",
        content:"DotNetCoreEfContextSettings",
        description:'',
        tags:''
    });

    a({
        id:953,
        title:"XmlDocExampleCode",
        content:"XmlDocExampleCode",
        description:'',
        tags:''
    });

    a({
        id:954,
        title:"ProcessArgumentListExtensions",
        content:"ProcessArgumentListExtensions",
        description:'',
        tags:''
    });

    a({
        id:955,
        title:"WebpackLocalRunnerSettings",
        content:"WebpackLocalRunnerSettings",
        description:'',
        tags:''
    });

    a({
        id:956,
        title:"MSBuildAliases",
        content:"MSBuildAliases",
        description:'',
        tags:''
    });

    a({
        id:957,
        title:"JMeterSettings",
        content:"JMeterSettings",
        description:'',
        tags:''
    });

    a({
        id:958,
        title:"TfsPullRequestSettings",
        content:"TfsPullRequestSettings",
        description:'',
        tags:''
    });

    a({
        id:959,
        title:"NuSpecDependency",
        content:"NuSpecDependency",
        description:'',
        tags:''
    });

    a({
        id:960,
        title:"MobileCenterTestGenerateAppiumSettings",
        content:"MobileCenterTestGenerateAppiumSettings",
        description:'',
        tags:''
    });

    a({
        id:961,
        title:"PlinkSettings",
        content:"PlinkSettings",
        description:'',
        tags:''
    });

    a({
        id:962,
        title:"UploadSettings",
        content:"UploadSettings",
        description:'',
        tags:''
    });

    a({
        id:963,
        title:"AzureStorageAlias",
        content:"AzureStorageAlias",
        description:'',
        tags:''
    });

    a({
        id:964,
        title:"ChocolateyToolResolver",
        content:"ChocolateyToolResolver",
        description:'',
        tags:''
    });

    a({
        id:965,
        title:"MobileCenterAppsCreateSettings",
        content:"MobileCenterAppsCreateSettings",
        description:'',
        tags:''
    });

    a({
        id:966,
        title:"PathAliases",
        content:"PathAliases",
        description:'',
        tags:''
    });

    a({
        id:967,
        title:"RaygunAliases",
        content:"RaygunAliases",
        description:'',
        tags:''
    });

    a({
        id:968,
        title:"DotNetCoreVSTester",
        content:"DotNetCoreVSTester",
        description:'',
        tags:''
    });

    a({
        id:969,
        title:"CsvHelperAliases",
        content:"CsvHelperAliases",
        description:'',
        tags:''
    });

    a({
        id:970,
        title:"DownloadStatus",
        content:"DownloadStatus",
        description:'',
        tags:''
    });

    a({
        id:971,
        title:"ContinuaCIChangesetInfo",
        content:"ContinuaCIChangesetInfo",
        description:'',
        tags:''
    });

    a({
        id:972,
        title:"VagrantPluginInstallSettingsExtensions",
        content:"VagrantPluginInstallSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:973,
        title:"FakeFileSystemExtensions",
        content:"FakeFileSystemExtensions",
        description:'',
        tags:''
    });

    a({
        id:974,
        title:"IFileSystemInfo",
        content:"IFileSystemInfo",
        description:'',
        tags:''
    });

    a({
        id:975,
        title:"ITeamCityProvider",
        content:"ITeamCityProvider",
        description:'',
        tags:''
    });

    a({
        id:976,
        title:"GenymotionEditSettings",
        content:"GenymotionEditSettings",
        description:'',
        tags:''
    });

    a({
        id:977,
        title:"TFBuildEnvironmentInfo",
        content:"TFBuildEnvironmentInfo",
        description:'',
        tags:''
    });

    a({
        id:978,
        title:"VagrantPackageSettingsExtensions",
        content:"VagrantPackageSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:979,
        title:"KuduProvider",
        content:"KuduProvider",
        description:'',
        tags:''
    });

    a({
        id:980,
        title:"IElasticBeanstalkManager",
        content:"IElasticBeanstalkManager",
        description:'',
        tags:''
    });

    a({
        id:981,
        title:"ResxConverterAliases",
        content:"ResxConverterAliases",
        description:'',
        tags:''
    });

    a({
        id:982,
        title:"PscpSettings",
        content:"PscpSettings",
        description:'',
        tags:''
    });

    a({
        id:983,
        title:"DownloadSettingsExtensions",
        content:"DownloadSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:984,
        title:"TargetPlatformVersion",
        content:"TargetPlatformVersion",
        description:'',
        tags:''
    });

    a({
        id:985,
        title:"NUnitRunner",
        content:"NUnitRunner",
        description:'',
        tags:''
    });

    a({
        id:986,
        title:"AppleSimulatorPair",
        content:"AppleSimulatorPair",
        description:'',
        tags:''
    });

    a({
        id:987,
        title:"MDToolSetupSettings",
        content:"MDToolSetupSettings",
        description:'',
        tags:''
    });

    a({
        id:988,
        title:"RestoreSqlBackupSettings",
        content:"RestoreSqlBackupSettings",
        description:'',
        tags:''
    });

    a({
        id:989,
        title:"DotCoverAnalyser",
        content:"DotCoverAnalyser",
        description:'',
        tags:''
    });

    a({
        id:990,
        title:"GlobbingExtensions",
        content:"GlobbingExtensions",
        description:'',
        tags:''
    });

    a({
        id:991,
        title:"StorytellerArgumentBuilder",
        content:"StorytellerArgumentBuilder",
        description:'',
        tags:''
    });

    a({
        id:992,
        title:"TransifexStatusSettings",
        content:"TransifexStatusSettings",
        description:'',
        tags:''
    });

    a({
        id:993,
        title:"OctopusDeployPusher",
        content:"OctopusDeployPusher",
        description:'',
        tags:''
    });

    a({
        id:994,
        title:"XBuildAliases",
        content:"XBuildAliases",
        description:'',
        tags:''
    });

    a({
        id:995,
        title:"TextTransformationAliases",
        content:"TextTransformationAliases",
        description:'',
        tags:''
    });

    a({
        id:996,
        title:"DeploySettingsExtensions",
        content:"DeploySettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:997,
        title:"ArgumentAttribute",
        content:"ArgumentAttribute",
        description:'',
        tags:''
    });

    a({
        id:998,
        title:"VagrantPluginInstallSettings",
        content:"VagrantPluginInstallSettings",
        description:'',
        tags:''
    });

    a({
        id:999,
        title:"YamlDocument",
        content:"YamlDocument",
        description:'',
        tags:''
    });

    a({
        id:1000,
        title:"DeploySettings",
        content:"DeploySettings",
        description:'',
        tags:''
    });

    a({
        id:1001,
        title:"CakeRuntime",
        content:"CakeRuntime",
        description:'',
        tags:''
    });

    a({
        id:1002,
        title:"StringExtensions",
        content:"StringExtensions",
        description:'',
        tags:''
    });

    a({
        id:1003,
        title:"Themes",
        content:"Themes",
        description:'',
        tags:''
    });

    a({
        id:1004,
        title:"ProjectPath",
        content:"ProjectPath",
        description:'',
        tags:''
    });

    a({
        id:1005,
        title:"TerraformApplyRunner",
        content:"TerraformApplyRunner",
        description:'',
        tags:''
    });

    a({
        id:1006,
        title:"SignToolDigestAlgorithm",
        content:"SignToolDigestAlgorithm",
        description:'',
        tags:''
    });

    a({
        id:1007,
        title:"PullRequestDiscussionThread",
        content:"PullRequestDiscussionThread",
        description:'',
        tags:''
    });

    a({
        id:1008,
        title:"PropertyAliasGenerator",
        content:"PropertyAliasGenerator",
        description:'',
        tags:''
    });

    a({
        id:1009,
        title:"UserFind",
        content:"UserFind",
        description:'',
        tags:''
    });

    a({
        id:1010,
        title:"GitPackagerExtensions",
        content:"GitPackagerExtensions",
        description:'',
        tags:''
    });

    a({
        id:1011,
        title:"BZip",
        content:"BZip",
        description:'',
        tags:''
    });

    a({
        id:1012,
        title:"SqlPackageDriftReportSettings",
        content:"SqlPackageDriftReportSettings",
        description:'',
        tags:''
    });

    a({
        id:1013,
        title:"XamarinAliases",
        content:"XamarinAliases",
        description:'',
        tags:''
    });

    a({
        id:1014,
        title:"LogFileFormat",
        content:"LogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:1015,
        title:"AppEncrypter",
        content:"AppEncrypter",
        description:'',
        tags:''
    });

    a({
        id:1016,
        title:"TeamCityInfo",
        content:"TeamCityInfo",
        description:'',
        tags:''
    });

    a({
        id:1017,
        title:"ComObject Provider",
        content:"ComObject Provider",
        description:'',
        tags:''
    });

    a({
        id:1018,
        title:"YeomanAliases",
        content:"YeomanAliases",
        description:'',
        tags:''
    });

    a({
        id:1019,
        title:"RunCommandProvider",
        content:"RunCommandProvider",
        description:'',
        tags:''
    });

    a({
        id:1020,
        title:"RaygunSymbolSettings",
        content:"RaygunSymbolSettings",
        description:'',
        tags:''
    });

    a({
        id:1021,
        title:"CoverallsNetRunner",
        content:"CoverallsNetRunner",
        description:'',
        tags:''
    });

    a({
        id:1022,
        title:"OctoScope",
        content:"OctoScope",
        description:'',
        tags:''
    });

    a({
        id:1023,
        title:"NuGetSetProxy",
        content:"NuGetSetProxy",
        description:'',
        tags:''
    });

    a({
        id:1024,
        title:"MarkdownlintIssuesSettings",
        content:"MarkdownlintIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:1025,
        title:"StrongNameReSignToolAliases",
        content:"StrongNameReSignToolAliases",
        description:'',
        tags:''
    });

    a({
        id:1026,
        title:"TFRepositoryType",
        content:"TFRepositoryType",
        description:'',
        tags:''
    });

    a({
        id:1027,
        title:"AppVeyorEnvironmentDeployment",
        content:"AppVeyorEnvironmentDeployment",
        description:'',
        tags:''
    });

    a({
        id:1028,
        title:"ChocolateyTool",
        content:"ChocolateyTool",
        description:'',
        tags:''
    });

    a({
        id:1029,
        title:"IMyGetProvider",
        content:"IMyGetProvider",
        description:'',
        tags:''
    });

    a({
        id:1030,
        title:"ParameterAttribute",
        content:"ParameterAttribute",
        description:'',
        tags:''
    });

    a({
        id:1031,
        title:"TerraformEnvNewSettings",
        content:"TerraformEnvNewSettings",
        description:'',
        tags:''
    });

    a({
        id:1032,
        title:"SqlServerAliases",
        content:"SqlServerAliases",
        description:'',
        tags:''
    });

    a({
        id:1033,
        title:"DotCoverMergeSettings",
        content:"DotCoverMergeSettings",
        description:'',
        tags:''
    });

    a({
        id:1034,
        title:"CakeContextExtensions",
        content:"CakeContextExtensions",
        description:'',
        tags:''
    });

    a({
        id:1035,
        title:"XBuildSettings",
        content:"XBuildSettings",
        description:'',
        tags:''
    });

    a({
        id:1036,
        title:"WindowsRegistry",
        content:"WindowsRegistry",
        description:'',
        tags:''
    });

    a({
        id:1037,
        title:"Settings",
        content:"Settings",
        description:'',
        tags:''
    });

    a({
        id:1038,
        title:"BitriseDirectoryInfo",
        content:"BitriseDirectoryInfo",
        description:'',
        tags:''
    });

    a({
        id:1039,
        title:"SolutionParserExtensions",
        content:"SolutionParserExtensions",
        description:'',
        tags:''
    });

    a({
        id:1040,
        title:"CakeReportPrinter",
        content:"CakeReportPrinter",
        description:'',
        tags:''
    });

    a({
        id:1041,
        title:"FluentMigratorSettings",
        content:"FluentMigratorSettings",
        description:'',
        tags:''
    });

    a({
        id:1042,
        title:"DeleteAllUndeployedApiProxyRevisionsSettings",
        content:"DeleteAllUndeployedApiProxyRevisionsSettings",
        description:'',
        tags:''
    });

    a({
        id:1043,
        title:"AppUnbundler",
        content:"AppUnbundler",
        description:'',
        tags:''
    });

    a({
        id:1044,
        title:"ScriptAnalyzerResult",
        content:"ScriptAnalyzerResult",
        description:'',
        tags:''
    });

    a({
        id:1045,
        title:"AndroidSdkManagerAliases",
        content:"AndroidSdkManagerAliases",
        description:'',
        tags:''
    });

    a({
        id:1046,
        title:"MDToolSettings",
        content:"MDToolSettings",
        description:'',
        tags:''
    });

    a({
        id:1047,
        title:"DirectoryExtensions",
        content:"DirectoryExtensions",
        description:'',
        tags:''
    });

    a({
        id:1048,
        title:"PackageType",
        content:"PackageType",
        description:'',
        tags:''
    });

    a({
        id:1049,
        title:"XmlDtdProcessing",
        content:"XmlDtdProcessing",
        description:'',
        tags:''
    });

    a({
        id:1050,
        title:"ITFBuildProvider",
        content:"ITFBuildProvider",
        description:'',
        tags:''
    });

    a({
        id:1051,
        title:"AutoToolSettings",
        content:"AutoToolSettings",
        description:'',
        tags:''
    });

    a({
        id:1052,
        title:"MSBuildLoggerOutputLevel",
        content:"MSBuildLoggerOutputLevel",
        description:'',
        tags:''
    });

    a({
        id:1053,
        title:"IScriptEngine",
        content:"IScriptEngine",
        description:'',
        tags:''
    });

    a({
        id:1054,
        title:"WebDeployManager",
        content:"WebDeployManager",
        description:'',
        tags:''
    });

    a({
        id:1055,
        title:"CoreModule",
        content:"CoreModule",
        description:'',
        tags:''
    });

    a({
        id:1056,
        title:"XComponentException",
        content:"XComponentException",
        description:'',
        tags:''
    });

    a({
        id:1057,
        title:"AutoToolSettings",
        content:"AutoToolSettings",
        description:'',
        tags:''
    });

    a({
        id:1058,
        title:"MobileCenterSetupAutocompleteSettings",
        content:"MobileCenterSetupAutocompleteSettings",
        description:'',
        tags:''
    });

    a({
        id:1059,
        title:"MobileCenterBuildBranchesListSettings",
        content:"MobileCenterBuildBranchesListSettings",
        description:'',
        tags:''
    });

    a({
        id:1060,
        title:"AmStartOptions",
        content:"AmStartOptions",
        description:'',
        tags:''
    });

    a({
        id:1061,
        title:"DescriptionScriptHost",
        content:"DescriptionScriptHost",
        description:'',
        tags:''
    });

    a({
        id:1062,
        title:"AssemblyInfoSettings",
        content:"AssemblyInfoSettings",
        description:'',
        tags:''
    });

    a({
        id:1063,
        title:"ILMergeRunner",
        content:"ILMergeRunner",
        description:'',
        tags:''
    });

    a({
        id:1064,
        title:"AppDecrypter",
        content:"AppDecrypter",
        description:'',
        tags:''
    });

    a({
        id:1065,
        title:"XamarinComponentRestoreSettings",
        content:"XamarinComponentRestoreSettings",
        description:'',
        tags:''
    });

    a({
        id:1066,
        title:"VsMetricsRunner",
        content:"VsMetricsRunner",
        description:'',
        tags:''
    });

    a({
        id:1067,
        title:"DbFullSqlProvider",
        content:"DbFullSqlProvider",
        description:'',
        tags:''
    });

    a({
        id:1068,
        title:"HockeyAppUploadSettings",
        content:"HockeyAppUploadSettings",
        description:'',
        tags:''
    });

    a({
        id:1069,
        title:"GenymotionSettings",
        content:"GenymotionSettings",
        description:'',
        tags:''
    });

    a({
        id:1070,
        title:"PublishDacpacSettings",
        content:"PublishDacpacSettings",
        description:'',
        tags:''
    });

    a({
        id:1071,
        title:"CakeConfiguration",
        content:"CakeConfiguration",
        description:'',
        tags:''
    });

    a({
        id:1072,
        title:"CommandProvider",
        content:"CommandProvider",
        description:'',
        tags:''
    });

    a({
        id:1073,
        title:"IIssue",
        content:"IIssue",
        description:'',
        tags:''
    });

    a({
        id:1074,
        title:"SqlPackageAction",
        content:"SqlPackageAction",
        description:'',
        tags:''
    });

    a({
        id:1075,
        title:"BitriseInfo",
        content:"BitriseInfo",
        description:'',
        tags:''
    });

    a({
        id:1076,
        title:"CocoaPodInstallSettings",
        content:"CocoaPodInstallSettings",
        description:'',
        tags:''
    });

    a({
        id:1077,
        title:"BambooPlanInfo",
        content:"BambooPlanInfo",
        description:'',
        tags:''
    });

    a({
        id:1078,
        title:"GetApiProxySettings",
        content:"GetApiProxySettings",
        description:'',
        tags:''
    });

    a({
        id:1079,
        title:"EfMigrator",
        content:"EfMigrator",
        description:'',
        tags:''
    });

    a({
        id:1080,
        title:"VsceTool",
        content:"VsceTool",
        description:'',
        tags:''
    });

    a({
        id:1081,
        title:"ParameterAttribute",
        content:"ParameterAttribute",
        description:'',
        tags:''
    });

    a({
        id:1082,
        title:"ProjectParserResult",
        content:"ProjectParserResult",
        description:'',
        tags:''
    });

    a({
        id:1083,
        title:"IPackageInstaller",
        content:"IPackageInstaller",
        description:'',
        tags:''
    });

    a({
        id:1084,
        title:"SonarBeginSettings",
        content:"SonarBeginSettings",
        description:'',
        tags:''
    });

    a({
        id:1085,
        title:"IRegistry",
        content:"IRegistry",
        description:'',
        tags:''
    });

    a({
        id:1086,
        title:"SpecFlowStepDefinitionReporter",
        content:"SpecFlowStepDefinitionReporter",
        description:'',
        tags:''
    });

    a({
        id:1087,
        title:"MobileCenterLogoutSettings",
        content:"MobileCenterLogoutSettings",
        description:'',
        tags:''
    });

    a({
        id:1088,
        title:"XmlDocExampleCodeParser",
        content:"XmlDocExampleCodeParser",
        description:'',
        tags:''
    });

    a({
        id:1089,
        title:"EmptySettings",
        content:"EmptySettings",
        description:'',
        tags:''
    });

    a({
        id:1090,
        title:"CakeModuleAttribute",
        content:"CakeModuleAttribute",
        description:'',
        tags:''
    });

    a({
        id:1091,
        title:"ChocolateyPackSettings",
        content:"ChocolateyPackSettings",
        description:'',
        tags:''
    });

    a({
        id:1092,
        title:"ReportGeneratorReportType",
        content:"ReportGeneratorReportType",
        description:'',
        tags:''
    });

    a({
        id:1093,
        title:"TfxSettings",
        content:"TfxSettings",
        description:'',
        tags:''
    });

    a({
        id:1094,
        title:"DocFxInitSettings",
        content:"DocFxInitSettings",
        description:'',
        tags:''
    });

    a({
        id:1095,
        title:"MSBuildLoggerSettings",
        content:"MSBuildLoggerSettings",
        description:'',
        tags:''
    });

    a({
        id:1096,
        title:"LoggingExtensions",
        content:"LoggingExtensions",
        description:'',
        tags:''
    });

    a({
        id:1097,
        title:"MobileCenterTokensListSettings",
        content:"MobileCenterTokensListSettings",
        description:'',
        tags:''
    });

    a({
        id:1098,
        title:"NuGetInitSettings",
        content:"NuGetInitSettings",
        description:'',
        tags:''
    });

    a({
        id:1099,
        title:"EC Settings",
        content:"EC Settings",
        description:'',
        tags:''
    });

    a({
        id:1100,
        title:"VsMetricsAliases",
        content:"VsMetricsAliases",
        description:'',
        tags:''
    });

    a({
        id:1101,
        title:"CakePropertyAliasAttribute",
        content:"CakePropertyAliasAttribute",
        description:'',
        tags:''
    });

    a({
        id:1102,
        title:"NUnit Labels",
        content:"NUnit Labels",
        description:'',
        tags:''
    });

    a({
        id:1103,
        title:"AdbInstallLocation",
        content:"AdbInstallLocation",
        description:'',
        tags:''
    });

    a({
        id:1104,
        title:"AssemblyInfoReflector",
        content:"AssemblyInfoReflector",
        description:'',
        tags:''
    });

    a({
        id:1105,
        title:"DupFinderRunner",
        content:"DupFinderRunner",
        description:'',
        tags:''
    });

    a({
        id:1106,
        title:"AppVeyorTagInfo",
        content:"AppVeyorTagInfo",
        description:'',
        tags:''
    });

    a({
        id:1107,
        title:"WebDeployAliases",
        content:"WebDeployAliases",
        description:'',
        tags:''
    });

    a({
        id:1108,
        title:"IFilesProvider",
        content:"IFilesProvider",
        description:'',
        tags:''
    });

    a({
        id:1109,
        title:"ResxConverters",
        content:"ResxConverters",
        description:'',
        tags:''
    });

    a({
        id:1110,
        title:"Direction",
        content:"Direction",
        description:'',
        tags:''
    });

    a({
        id:1111,
        title:"BambooProvider",
        content:"BambooProvider",
        description:'',
        tags:''
    });

    a({
        id:1112,
        title:"MobileCenterLoginSettings",
        content:"MobileCenterLoginSettings",
        description:'',
        tags:''
    });

    a({
        id:1113,
        title:"IBitriseProvider",
        content:"IBitriseProvider",
        description:'',
        tags:''
    });

    a({
        id:1114,
        title:"ChutzpahBrowser",
        content:"ChutzpahBrowser",
        description:'',
        tags:''
    });

    a({
        id:1115,
        title:"SonarSettings",
        content:"SonarSettings",
        description:'',
        tags:''
    });

    a({
        id:1116,
        title:"DeleteKeyValueMapSettings",
        content:"DeleteKeyValueMapSettings",
        description:'',
        tags:''
    });

    a({
        id:1117,
        title:"CodeAnalysisReport",
        content:"CodeAnalysisReport",
        description:'',
        tags:''
    });

    a({
        id:1118,
        title:"TextTransformationExtensions",
        content:"TextTransformationExtensions",
        description:'',
        tags:''
    });

    a({
        id:1119,
        title:"AutoToolSettings",
        content:"AutoToolSettings",
        description:'',
        tags:''
    });

    a({
        id:1120,
        title:"VagrantSnapshotRestoreSettingsExtensions",
        content:"VagrantSnapshotRestoreSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1121,
        title:"AdbPermissionInfo",
        content:"AdbPermissionInfo",
        description:'',
        tags:''
    });

    a({
        id:1122,
        title:"NpmPublishSettings",
        content:"NpmPublishSettings",
        description:'',
        tags:''
    });

    a({
        id:1123,
        title:"GemAliases",
        content:"GemAliases",
        description:'',
        tags:''
    });

    a({
        id:1124,
        title:"ConvertableFilePath",
        content:"ConvertableFilePath",
        description:'',
        tags:''
    });

    a({
        id:1125,
        title:"XCRunSettings",
        content:"XCRunSettings",
        description:'',
        tags:''
    });

    a({
        id:1126,
        title:"ChocolateyUpgrader",
        content:"ChocolateyUpgrader",
        description:'',
        tags:''
    });

    a({
        id:1127,
        title:"AzureLoginAliases",
        content:"AzureLoginAliases",
        description:'',
        tags:''
    });

    a({
        id:1128,
        title:"SkipRule",
        content:"SkipRule",
        description:'',
        tags:''
    });

    a({
        id:1129,
        title:"CoverallsNetReportType",
        content:"CoverallsNetReportType",
        description:'',
        tags:''
    });

    a({
        id:1130,
        title:"ChutzpahAliases",
        content:"ChutzpahAliases",
        description:'',
        tags:''
    });

    a({
        id:1131,
        title:"ActivityManagerAliases",
        content:"ActivityManagerAliases",
        description:'',
        tags:''
    });

    a({
        id:1132,
        title:"NuGetRestoreSettings",
        content:"NuGetRestoreSettings",
        description:'',
        tags:''
    });

    a({
        id:1133,
        title:"NewmanSettings",
        content:"NewmanSettings",
        description:'',
        tags:''
    });

    a({
        id:1134,
        title:"PathComparer",
        content:"PathComparer",
        description:'',
        tags:''
    });

    a({
        id:1135,
        title:"MsDeploySettings",
        content:"MsDeploySettings",
        description:'',
        tags:''
    });

    a({
        id:1136,
        title:"MobileCenterOrgsUpdateSettings",
        content:"MobileCenterOrgsUpdateSettings",
        description:'',
        tags:''
    });

    a({
        id:1137,
        title:"ServiceAliases",
        content:"ServiceAliases",
        description:'',
        tags:''
    });

    a({
        id:1138,
        title:"ScriptAlias",
        content:"ScriptAlias",
        description:'',
        tags:''
    });

    a({
        id:1139,
        title:"EC Manager",
        content:"EC Manager",
        description:'',
        tags:''
    });

    a({
        id:1140,
        title:"FileSystemExtensions",
        content:"FileSystemExtensions",
        description:'',
        tags:''
    });

    a({
        id:1141,
        title:"CakeEngine",
        content:"CakeEngine",
        description:'',
        tags:''
    });

    a({
        id:1142,
        title:"Manager",
        content:"Manager",
        description:'',
        tags:''
    });

    a({
        id:1143,
        title:"TerraformPlanRunner",
        content:"TerraformPlanRunner",
        description:'',
        tags:''
    });

    a({
        id:1144,
        title:"BitbucketPipelinesRepositoryInfo",
        content:"BitbucketPipelinesRepositoryInfo",
        description:'',
        tags:''
    });

    a({
        id:1145,
        title:"Operation",
        content:"Operation",
        description:'',
        tags:''
    });

    a({
        id:1146,
        title:"DotNetCoreBuilder",
        content:"DotNetCoreBuilder",
        description:'',
        tags:''
    });

    a({
        id:1147,
        title:"PaketPackSettings",
        content:"PaketPackSettings",
        description:'',
        tags:''
    });

    a({
        id:1148,
        title:"VSTestPlatform",
        content:"VSTestPlatform",
        description:'',
        tags:''
    });

    a({
        id:1149,
        title:"NpmRebuildAliases",
        content:"NpmRebuildAliases",
        description:'',
        tags:''
    });

    a({
        id:1150,
        title:"ExtendedNuGetAliases",
        content:"ExtendedNuGetAliases",
        description:'',
        tags:''
    });

    a({
        id:1151,
        title:"TeamCityProjectInfo",
        content:"TeamCityProjectInfo",
        description:'',
        tags:''
    });

    a({
        id:1152,
        title:"NuGetSetProxySettings",
        content:"NuGetSetProxySettings",
        description:'',
        tags:''
    });

    a({
        id:1153,
        title:"HeatRunner",
        content:"HeatRunner",
        description:'',
        tags:''
    });

    a({
        id:1154,
        title:"GitMergeResult",
        content:"GitMergeResult",
        description:'',
        tags:''
    });

    a({
        id:1155,
        title:"ProjectPathExtensions",
        content:"ProjectPathExtensions",
        description:'',
        tags:''
    });

    a({
        id:1156,
        title:"IAssemblyLoader",
        content:"IAssemblyLoader",
        description:'',
        tags:''
    });

    a({
        id:1157,
        title:"IAppPackagerResolver",
        content:"IAppPackagerResolver",
        description:'',
        tags:''
    });

    a({
        id:1158,
        title:"NodePackagedModuleMetadata",
        content:"NodePackagedModuleMetadata",
        description:'',
        tags:''
    });

    a({
        id:1159,
        title:"CakeAliasCategoryAttribute",
        content:"CakeAliasCategoryAttribute",
        description:'',
        tags:''
    });

    a({
        id:1160,
        title:"IWebDeployManager",
        content:"IWebDeployManager",
        description:'',
        tags:''
    });

    a({
        id:1161,
        title:"BackupSettingsProvider",
        content:"BackupSettingsProvider",
        description:'',
        tags:''
    });

    a({
        id:1162,
        title:"TerraformInitSettings",
        content:"TerraformInitSettings",
        description:'',
        tags:''
    });

    a({
        id:1163,
        title:"VagrantPowerShellSettings",
        content:"VagrantPowerShellSettings",
        description:'',
        tags:''
    });

    a({
        id:1164,
        title:"TravisCIRepositoryInfo",
        content:"TravisCIRepositoryInfo",
        description:'',
        tags:''
    });

    a({
        id:1165,
        title:"FakePlatform",
        content:"FakePlatform",
        description:'',
        tags:''
    });

    a({
        id:1166,
        title:"CakePlatform",
        content:"CakePlatform",
        description:'',
        tags:''
    });

    a({
        id:1167,
        title:"CakeHttpClientHandler",
        content:"CakeHttpClientHandler",
        description:'',
        tags:''
    });

    a({
        id:1168,
        title:"AppPoolConfigProvider",
        content:"AppPoolConfigProvider",
        description:'',
        tags:''
    });

    a({
        id:1169,
        title:"IGitLabCIProvider",
        content:"IGitLabCIProvider",
        description:'',
        tags:''
    });

    a({
        id:1170,
        title:"OpenCoverLogLevel",
        content:"OpenCoverLogLevel",
        description:'',
        tags:''
    });

    a({
        id:1171,
        title:"HttpSettings",
        content:"HttpSettings",
        description:'',
        tags:''
    });

    a({
        id:1172,
        title:"GenymotionSimulatorDetails",
        content:"GenymotionSimulatorDetails",
        description:'',
        tags:''
    });

    a({
        id:1173,
        title:"Route SettingsExtensions",
        content:"Route SettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1174,
        title:"ChocolateyFeatureSettings",
        content:"ChocolateyFeatureSettings",
        description:'',
        tags:''
    });

    a({
        id:1175,
        title:"BuildTargetExecutable",
        content:"BuildTargetExecutable",
        description:'',
        tags:''
    });

    a({
        id:1176,
        title:"TaskTeardownContext",
        content:"TaskTeardownContext",
        description:'',
        tags:''
    });

    a({
        id:1177,
        title:"ICakeContainerRegistrar",
        content:"ICakeContainerRegistrar",
        description:'',
        tags:''
    });

    a({
        id:1178,
        title:"CakeMailProvider",
        content:"CakeMailProvider",
        description:'',
        tags:''
    });

    a({
        id:1179,
        title:"DocFxIssuesAliases",
        content:"DocFxIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:1180,
        title:"GitReleaseManagerExportSettings",
        content:"GitReleaseManagerExportSettings",
        description:'',
        tags:''
    });

    a({
        id:1181,
        title:"ReportUnitAliases",
        content:"ReportUnitAliases",
        description:'',
        tags:''
    });

    a({
        id:1182,
        title:"ArgumentsBuilderExtension",
        content:"ArgumentsBuilderExtension",
        description:'',
        tags:''
    });

    a({
        id:1183,
        title:"AppPoolPipelineProvider",
        content:"AppPoolPipelineProvider",
        description:'',
        tags:''
    });

    a({
        id:1184,
        title:"MobileCenterOrgsCollaboratorsListSettings",
        content:"MobileCenterOrgsCollaboratorsListSettings",
        description:'',
        tags:''
    });

    a({
        id:1185,
        title:"DupFinderSettings",
        content:"DupFinderSettings",
        description:'',
        tags:''
    });

    a({
        id:1186,
        title:"MobileCenterDistributeReleasesDeleteSettings",
        content:"MobileCenterDistributeReleasesDeleteSettings",
        description:'',
        tags:''
    });

    a({
        id:1187,
        title:"CLIReporterSettings",
        content:"CLIReporterSettings",
        description:'',
        tags:''
    });

    a({
        id:1188,
        title:"AutoRestSettings",
        content:"AutoRestSettings",
        description:'',
        tags:''
    });

    a({
        id:1189,
        title:"NuGetSourcesSettings",
        content:"NuGetSourcesSettings",
        description:'',
        tags:''
    });

    a({
        id:1190,
        title:"GitDescribeStrategy",
        content:"GitDescribeStrategy",
        description:'',
        tags:''
    });

    a({
        id:1191,
        title:"Zipper",
        content:"Zipper",
        description:'',
        tags:''
    });

    a({
        id:1192,
        title:"NodeToolRunner",
        content:"NodeToolRunner",
        description:'',
        tags:''
    });

    a({
        id:1193,
        title:"NuGetToolResolver",
        content:"NuGetToolResolver",
        description:'',
        tags:''
    });

    a({
        id:1194,
        title:"YeomanRunnerSettings",
        content:"YeomanRunnerSettings",
        description:'',
        tags:''
    });

    a({
        id:1195,
        title:"GemArgumentBuilder",
        content:"GemArgumentBuilder",
        description:'',
        tags:''
    });

    a({
        id:1196,
        title:"IisAppProvider",
        content:"IisAppProvider",
        description:'',
        tags:''
    });

    a({
        id:1197,
        title:"WebpackLocalRunner",
        content:"WebpackLocalRunner",
        description:'',
        tags:''
    });

    a({
        id:1198,
        title:"NpgsqlQueryRepository",
        content:"NpgsqlQueryRepository",
        description:'',
        tags:''
    });

    a({
        id:1199,
        title:"KeePassReader",
        content:"KeePassReader",
        description:'',
        tags:''
    });

    a({
        id:1200,
        title:"OpenCoverAliases",
        content:"OpenCoverAliases",
        description:'',
        tags:''
    });

    a({
        id:1201,
        title:"LightRunner",
        content:"LightRunner",
        description:'',
        tags:''
    });

    a({
        id:1202,
        title:"ICreatePublishSettings",
        content:"ICreatePublishSettings",
        description:'',
        tags:''
    });

    a({
        id:1203,
        title:"XBuildToolVersion",
        content:"XBuildToolVersion",
        description:'',
        tags:''
    });

    a({
        id:1204,
        title:"IPullRequestDiscussionThread",
        content:"IPullRequestDiscussionThread",
        description:'',
        tags:''
    });

    a({
        id:1205,
        title:"CakeConsole",
        content:"CakeConsole",
        description:'',
        tags:''
    });

    a({
        id:1206,
        title:"ContinuaCIProjectInfo",
        content:"ContinuaCIProjectInfo",
        description:'',
        tags:''
    });

    a({
        id:1207,
        title:"ReportIssuesToPullRequestSettings",
        content:"ReportIssuesToPullRequestSettings",
        description:'',
        tags:''
    });

    a({
        id:1208,
        title:"VSToolSetupRunner",
        content:"VSToolSetupRunner",
        description:'',
        tags:''
    });

    a({
        id:1209,
        title:"ScriptyAliases",
        content:"ScriptyAliases",
        description:'',
        tags:''
    });

    a({
        id:1210,
        title:"PlistAliases",
        content:"PlistAliases",
        description:'',
        tags:''
    });

    a({
        id:1211,
        title:"NUnit AppDomainUsage",
        content:"NUnit AppDomainUsage",
        description:'',
        tags:''
    });

    a({
        id:1212,
        title:"IBitbucketPipelinesProvider",
        content:"IBitbucketPipelinesProvider",
        description:'',
        tags:''
    });

    a({
        id:1213,
        title:"XmlTransformationAlias",
        content:"XmlTransformationAlias",
        description:'',
        tags:''
    });

    a({
        id:1214,
        title:"SqlPackageImportSettings",
        content:"SqlPackageImportSettings",
        description:'',
        tags:''
    });

    a({
        id:1215,
        title:"VagrantBoxRemoveSettingsExtensions",
        content:"VagrantBoxRemoveSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1216,
        title:"MicrosoftTeamsMessageSection",
        content:"MicrosoftTeamsMessageSection",
        description:'',
        tags:''
    });

    a({
        id:1217,
        title:"MSBuildBinaryLogSettings",
        content:"MSBuildBinaryLogSettings",
        description:'',
        tags:''
    });

    a({
        id:1218,
        title:"CakeContextExtensions",
        content:"CakeContextExtensions",
        description:'',
        tags:''
    });

    a({
        id:1219,
        title:"ITeardownContext",
        content:"ITeardownContext",
        description:'',
        tags:''
    });

    a({
        id:1220,
        title:"MobileCenterBuildQueueSettings",
        content:"MobileCenterBuildQueueSettings",
        description:'',
        tags:''
    });

    a({
        id:1221,
        title:"VSTestSettingsExtensions",
        content:"VSTestSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1222,
        title:"TerraformEnvNewRunner",
        content:"TerraformEnvNewRunner",
        description:'',
        tags:''
    });

    a({
        id:1223,
        title:"MobileCenterProfileListSettings",
        content:"MobileCenterProfileListSettings",
        description:'',
        tags:''
    });

    a({
        id:1224,
        title:"CoverallsNetSettings",
        content:"CoverallsNetSettings",
        description:'',
        tags:''
    });

    a({
        id:1225,
        title:"TfxAliases",
        content:"TfxAliases",
        description:'',
        tags:''
    });

    a({
        id:1226,
        title:"StorytellerSettings",
        content:"StorytellerSettings",
        description:'',
        tags:''
    });

    a({
        id:1227,
        title:"ToolFixture",
        content:"ToolFixture",
        description:'',
        tags:''
    });

    a({
        id:1228,
        title:"MobileCenterTestRunCalabashSettings",
        content:"MobileCenterTestRunCalabashSettings",
        description:'',
        tags:''
    });

    a({
        id:1229,
        title:"MobileCenterTelemetryOnSettings",
        content:"MobileCenterTelemetryOnSettings",
        description:'',
        tags:''
    });

    a({
        id:1230,
        title:"UploadSettingsExtensions",
        content:"UploadSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1231,
        title:"GitAliases",
        content:"GitAliases",
        description:'',
        tags:''
    });

    a({
        id:1232,
        title:"IScriptSession",
        content:"IScriptSession",
        description:'',
        tags:''
    });

    a({
        id:1233,
        title:"GitReleaseNotesSettings",
        content:"GitReleaseNotesSettings",
        description:'',
        tags:''
    });

    a({
        id:1234,
        title:"TerraformEnvSelectSettings",
        content:"TerraformEnvSelectSettings",
        description:'',
        tags:''
    });

    a({
        id:1235,
        title:"InspectCodeAliases",
        content:"InspectCodeAliases",
        description:'',
        tags:''
    });

    a({
        id:1236,
        title:"DockerImagePushSettings",
        content:"DockerImagePushSettings",
        description:'',
        tags:''
    });

    a({
        id:1237,
        title:"ChocolateySourcesSettings",
        content:"ChocolateySourcesSettings",
        description:'',
        tags:''
    });

    a({
        id:1238,
        title:"GenericDockerRunner",
        content:"GenericDockerRunner",
        description:'',
        tags:''
    });

    a({
        id:1239,
        title:"IRoute Manager",
        content:"IRoute Manager",
        description:'',
        tags:''
    });

    a({
        id:1240,
        title:"SimCtlSettings",
        content:"SimCtlSettings",
        description:'',
        tags:''
    });

    a({
        id:1241,
        title:"BambooCommitInfo",
        content:"BambooCommitInfo",
        description:'',
        tags:''
    });

    a({
        id:1242,
        title:"VscePublishSettings",
        content:"VscePublishSettings",
        description:'',
        tags:''
    });

    a({
        id:1243,
        title:"RecoveryMode",
        content:"RecoveryMode",
        description:'',
        tags:''
    });

    a({
        id:1244,
        title:"XUnit SettingsExtensions",
        content:"XUnit SettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1245,
        title:"PackageReference",
        content:"PackageReference",
        description:'',
        tags:''
    });

    a({
        id:1246,
        title:"CocoaPodUpdateSettings",
        content:"CocoaPodUpdateSettings",
        description:'',
        tags:''
    });

    a({
        id:1247,
        title:"AssemblyInfoParseResult",
        content:"AssemblyInfoParseResult",
        description:'',
        tags:''
    });

    a({
        id:1248,
        title:"XmlDocAliases",
        content:"XmlDocAliases",
        description:'',
        tags:''
    });

    a({
        id:1249,
        title:"StorytellerCommand",
        content:"StorytellerCommand",
        description:'',
        tags:''
    });

    a({
        id:1250,
        title:"IDebugger",
        content:"IDebugger",
        description:'',
        tags:''
    });

    a({
        id:1251,
        title:"WinScpExtensions",
        content:"WinScpExtensions",
        description:'',
        tags:''
    });

    a({
        id:1252,
        title:"DockerTool",
        content:"DockerTool",
        description:'',
        tags:''
    });

    a({
        id:1253,
        title:"UserUpdate",
        content:"UserUpdate",
        description:'',
        tags:''
    });

    a({
        id:1254,
        title:"TransifexRunnerRemoteSettings",
        content:"TransifexRunnerRemoteSettings",
        description:'',
        tags:''
    });

    a({
        id:1255,
        title:"TextTransformRunner",
        content:"TextTransformRunner",
        description:'',
        tags:''
    });

    a({
        id:1256,
        title:"GitterChatMessageSettings",
        content:"GitterChatMessageSettings",
        description:'',
        tags:''
    });

    a({
        id:1257,
        title:"DotCoverReportType",
        content:"DotCoverReportType",
        description:'',
        tags:''
    });

    a({
        id:1258,
        title:"FluentMigratorToolResolver",
        content:"FluentMigratorToolResolver",
        description:'',
        tags:''
    });

    a({
        id:1259,
        title:"MyGetProvider",
        content:"MyGetProvider",
        description:'',
        tags:''
    });

    a({
        id:1260,
        title:"FixieRunner",
        content:"FixieRunner",
        description:'',
        tags:''
    });

    a({
        id:1261,
        title:"PuttyAliases",
        content:"PuttyAliases",
        description:'',
        tags:''
    });

    a({
        id:1262,
        title:"ContinuaCIConfigurationInfo",
        content:"ContinuaCIConfigurationInfo",
        description:'',
        tags:''
    });

    a({
        id:1263,
        title:"GenymotionVersion",
        content:"GenymotionVersion",
        description:'',
        tags:''
    });

    a({
        id:1264,
        title:"FileSetAliases",
        content:"FileSetAliases",
        description:'',
        tags:''
    });

    a({
        id:1265,
        title:"CurlSettings",
        content:"CurlSettings",
        description:'',
        tags:''
    });

    a({
        id:1266,
        title:"DockerContainerStartSettings",
        content:"DockerContainerStartSettings",
        description:'',
        tags:''
    });

    a({
        id:1267,
        title:"NpmRunScriptSettings",
        content:"NpmRunScriptSettings",
        description:'',
        tags:''
    });

    a({
        id:1268,
        title:"SearchScope",
        content:"SearchScope",
        description:'',
        tags:''
    });

    a({
        id:1269,
        title:"MobileCenterAppsGetCurrentSettings",
        content:"MobileCenterAppsGetCurrentSettings",
        description:'',
        tags:''
    });

    a({
        id:1270,
        title:"DotNetCoreEfDatabaseDropper",
        content:"DotNetCoreEfDatabaseDropper",
        description:'',
        tags:''
    });

    a({
        id:1271,
        title:"JenkinsChangeInfo",
        content:"JenkinsChangeInfo",
        description:'',
        tags:''
    });

    a({
        id:1272,
        title:"DockerSwarmInitSettings",
        content:"DockerSwarmInitSettings",
        description:'',
        tags:''
    });

    a({
        id:1273,
        title:"CandleRunner",
        content:"CandleRunner",
        description:'',
        tags:''
    });

    a({
        id:1274,
        title:"DocFxInitAliases",
        content:"DocFxInitAliases",
        description:'',
        tags:''
    });

    a({
        id:1275,
        title:"AzureStorage",
        content:"AzureStorage",
        description:'',
        tags:''
    });

    a({
        id:1276,
        title:"XmlPeekAliases",
        content:"XmlPeekAliases",
        description:'',
        tags:''
    });

    a({
        id:1277,
        title:"DotCoverTool",
        content:"DotCoverTool",
        description:'',
        tags:''
    });

    a({
        id:1278,
        title:"IEfMigratorBackend",
        content:"IEfMigratorBackend",
        description:'',
        tags:''
    });

    a({
        id:1279,
        title:"IMsDeployArgument",
        content:"IMsDeployArgument",
        description:'',
        tags:''
    });

    a({
        id:1280,
        title:"EnvironmentAliases",
        content:"EnvironmentAliases",
        description:'',
        tags:''
    });

    a({
        id:1281,
        title:"IJsonSerializerStrategy",
        content:"IJsonSerializerStrategy",
        description:'',
        tags:''
    });

    a({
        id:1282,
        title:"VSTestRunner",
        content:"VSTestRunner",
        description:'',
        tags:''
    });

    a({
        id:1283,
        title:"XUnitSettings",
        content:"XUnitSettings",
        description:'',
        tags:''
    });

    a({
        id:1284,
        title:"MsBuildIssuesAliases",
        content:"MsBuildIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:1285,
        title:"MSBuildVerbosityExtensions",
        content:"MSBuildVerbosityExtensions",
        description:'',
        tags:''
    });

    a({
        id:1286,
        title:"ChocolateySettings",
        content:"ChocolateySettings",
        description:'',
        tags:''
    });

    a({
        id:1287,
        title:"ParallelismOption",
        content:"ParallelismOption",
        description:'',
        tags:''
    });

    a({
        id:1288,
        title:"TFBuildInfo",
        content:"TFBuildInfo",
        description:'',
        tags:''
    });

    a({
        id:1289,
        title:"VSTestFrameworkVersion",
        content:"VSTestFrameworkVersion",
        description:'',
        tags:''
    });

    a({
        id:1290,
        title:"InstalledAndroidSdkPackage",
        content:"InstalledAndroidSdkPackage",
        description:'',
        tags:''
    });

    a({
        id:1291,
        title:"FakeDirectory",
        content:"FakeDirectory",
        description:'',
        tags:''
    });

    a({
        id:1292,
        title:"ContinuaCIEnvironmentInfo",
        content:"ContinuaCIEnvironmentInfo",
        description:'',
        tags:''
    });

    a({
        id:1293,
        title:"SqlServerPackagerRunner",
        content:"SqlServerPackagerRunner",
        description:'',
        tags:''
    });

    a({
        id:1294,
        title:"CompressionBase",
        content:"CompressionBase",
        description:'',
        tags:''
    });

    a({
        id:1295,
        title:"NSwagRunner",
        content:"NSwagRunner",
        description:'',
        tags:''
    });

    a({
        id:1296,
        title:"IToolResolutionStrategy",
        content:"IToolResolutionStrategy",
        description:'',
        tags:''
    });

    a({
        id:1297,
        title:"AppVeyorDeployment",
        content:"AppVeyorDeployment",
        description:'',
        tags:''
    });

    a({
        id:1298,
        title:"XcToolsAliases",
        content:"XcToolsAliases",
        description:'',
        tags:''
    });

    a({
        id:1299,
        title:"iOSResxConverterOutput",
        content:"iOSResxConverterOutput",
        description:'',
        tags:''
    });

    a({
        id:1300,
        title:"CakeMethodAliasAttribute",
        content:"CakeMethodAliasAttribute",
        description:'',
        tags:''
    });

    a({
        id:1301,
        title:"ArchiveDirProvider",
        content:"ArchiveDirProvider",
        description:'',
        tags:''
    });

    a({
        id:1302,
        title:"MethodInfoExtensions",
        content:"MethodInfoExtensions",
        description:'',
        tags:''
    });

    a({
        id:1303,
        title:"TfxExtensionInstallRunner",
        content:"TfxExtensionInstallRunner",
        description:'',
        tags:''
    });

    a({
        id:1304,
        title:"ChocolateyAliases",
        content:"ChocolateyAliases",
        description:'',
        tags:''
    });

    a({
        id:1305,
        title:"KuduSyncRunner",
        content:"KuduSyncRunner",
        description:'',
        tags:''
    });

    a({
        id:1306,
        title:"DockerImageTagSettings",
        content:"DockerImageTagSettings",
        description:'',
        tags:''
    });

    a({
        id:1307,
        title:"DotNetCoreTestExtensions",
        content:"DotNetCoreTestExtensions",
        description:'',
        tags:''
    });

    a({
        id:1308,
        title:"CloudFrontAliases",
        content:"CloudFrontAliases",
        description:'',
        tags:''
    });

    a({
        id:1309,
        title:"FakeEnvironment",
        content:"FakeEnvironment",
        description:'',
        tags:''
    });

    a({
        id:1310,
        title:"StrongNameVerifyToolAliases",
        content:"StrongNameVerifyToolAliases",
        description:'',
        tags:''
    });

    a({
        id:1311,
        title:"FileExtensions",
        content:"FileExtensions",
        description:'',
        tags:''
    });

    a({
        id:1312,
        title:"NpmPublisher",
        content:"NpmPublisher",
        description:'',
        tags:''
    });

    a({
        id:1313,
        title:"TerraformDestroySettings",
        content:"TerraformDestroySettings",
        description:'',
        tags:''
    });

    a({
        id:1314,
        title:"WiXHarvestType",
        content:"WiXHarvestType",
        description:'',
        tags:''
    });

    a({
        id:1315,
        title:"GenericRunner",
        content:"GenericRunner",
        description:'',
        tags:''
    });

    a({
        id:1316,
        title:"EmberArgumentBuilder",
        content:"EmberArgumentBuilder",
        description:'',
        tags:''
    });

    a({
        id:1317,
        title:"ChocolateyDownloadSettings",
        content:"ChocolateyDownloadSettings",
        description:'',
        tags:''
    });

    a({
        id:1318,
        title:"KuduAliases",
        content:"KuduAliases",
        description:'',
        tags:''
    });

    a({
        id:1319,
        title:"ChocolateySources",
        content:"ChocolateySources",
        description:'',
        tags:''
    });

    a({
        id:1320,
        title:"SwaggerGeneratorSettingsExtensions",
        content:"SwaggerGeneratorSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1321,
        title:"DockerBridge",
        content:"DockerBridge",
        description:'',
        tags:''
    });

    a({
        id:1322,
        title:"InstallNodePackagedModulesSettings",
        content:"InstallNodePackagedModulesSettings",
        description:'',
        tags:''
    });

    a({
        id:1323,
        title:"HtmlReporterSettingsExtensions",
        content:"HtmlReporterSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1324,
        title:"ITaskSetupContext",
        content:"ITaskSetupContext",
        description:'',
        tags:''
    });

    a({
        id:1325,
        title:"EfMigratorSettings",
        content:"EfMigratorSettings",
        description:'',
        tags:''
    });

    a({
        id:1326,
        title:"TfxExtensionInstallSettings",
        content:"TfxExtensionInstallSettings",
        description:'',
        tags:''
    });

    a({
        id:1327,
        title:"AppleSimulatorPairedPhone",
        content:"AppleSimulatorPairedPhone",
        description:'',
        tags:''
    });

    a({
        id:1328,
        title:"WebpackBuildMode",
        content:"WebpackBuildMode",
        description:'',
        tags:''
    });

    a({
        id:1329,
        title:"AppPackagerTool",
        content:"AppPackagerTool",
        description:'',
        tags:''
    });

    a({
        id:1330,
        title:"CocoaPodSettings",
        content:"CocoaPodSettings",
        description:'',
        tags:''
    });

    a({
        id:1331,
        title:"BaseRuleDescription",
        content:"BaseRuleDescription",
        description:'',
        tags:''
    });

    a({
        id:1332,
        title:"CakeMailResult",
        content:"CakeMailResult",
        description:'',
        tags:''
    });

    a({
        id:1333,
        title:"RoundhouseSettings",
        content:"RoundhouseSettings",
        description:'',
        tags:''
    });

    a({
        id:1334,
        title:"VSWhereLegacySettings",
        content:"VSWhereLegacySettings",
        description:'',
        tags:''
    });

    a({
        id:1335,
        title:"FileAliases",
        content:"FileAliases",
        description:'',
        tags:''
    });

    a({
        id:1336,
        title:"WiXOutputGroupType",
        content:"WiXOutputGroupType",
        description:'',
        tags:''
    });

    a({
        id:1337,
        title:"CakeTaskExecutionStatus",
        content:"CakeTaskExecutionStatus",
        description:'',
        tags:''
    });

    a({
        id:1338,
        title:"GeneratorSettings",
        content:"GeneratorSettings",
        description:'',
        tags:''
    });

    a({
        id:1339,
        title:"INuGetContentResolver",
        content:"INuGetContentResolver",
        description:'',
        tags:''
    });

    a({
        id:1340,
        title:"ElasticBeanstalkManager",
        content:"ElasticBeanstalkManager",
        description:'',
        tags:''
    });

    a({
        id:1341,
        title:"AppVeyorEnvironment",
        content:"AppVeyorEnvironment",
        description:'',
        tags:''
    });

    a({
        id:1342,
        title:"IpVersion",
        content:"IpVersion",
        description:'',
        tags:''
    });

    a({
        id:1343,
        title:"MSBuildDistributedLogger",
        content:"MSBuildDistributedLogger",
        description:'',
        tags:''
    });

    a({
        id:1344,
        title:"ISqlQueryRepository",
        content:"ISqlQueryRepository",
        description:'',
        tags:''
    });

    a({
        id:1345,
        title:"ScriptySettings",
        content:"ScriptySettings",
        description:'',
        tags:''
    });

    a({
        id:1346,
        title:"CodeAnalysisReportingAliases",
        content:"CodeAnalysisReportingAliases",
        description:'',
        tags:''
    });

    a({
        id:1347,
        title:"DbMySqlProvider",
        content:"DbMySqlProvider",
        description:'',
        tags:''
    });

    a({
        id:1348,
        title:"GoCDModificationInfo",
        content:"GoCDModificationInfo",
        description:'',
        tags:''
    });

    a({
        id:1349,
        title:"DockerContainerStopSettings",
        content:"DockerContainerStopSettings",
        description:'',
        tags:''
    });

    a({
        id:1350,
        title:"IMsDeployProvider",
        content:"IMsDeployProvider",
        description:'',
        tags:''
    });

    a({
        id:1351,
        title:"OctopusDeployPacker",
        content:"OctopusDeployPacker",
        description:'',
        tags:''
    });

    a({
        id:1352,
        title:"DotNetCoreMSBuildBuilder",
        content:"DotNetCoreMSBuildBuilder",
        description:'',
        tags:''
    });

    a({
        id:1353,
        title:"DocFxBuildSettings",
        content:"DocFxBuildSettings",
        description:'',
        tags:''
    });

    a({
        id:1354,
        title:"MobileCenterAnalyticsEventsShowSettings",
        content:"MobileCenterAnalyticsEventsShowSettings",
        description:'',
        tags:''
    });

    a({
        id:1355,
        title:"ImportProxySettings",
        content:"ImportProxySettings",
        description:'',
        tags:''
    });

    a({
        id:1356,
        title:"TwitterProvider",
        content:"TwitterProvider",
        description:'',
        tags:''
    });

    a({
        id:1357,
        title:"AssertEx",
        content:"AssertEx",
        description:'',
        tags:''
    });

    a({
        id:1358,
        title:"GitReleaseNotesRunner",
        content:"GitReleaseNotesRunner",
        description:'',
        tags:''
    });

    a({
        id:1359,
        title:"XdtTransformationAlias",
        content:"XdtTransformationAlias",
        description:'',
        tags:''
    });

    a({
        id:1360,
        title:"NpmRebuildSettings",
        content:"NpmRebuildSettings",
        description:'',
        tags:''
    });

    a({
        id:1361,
        title:"RaygunSymbolUploadResponse",
        content:"RaygunSymbolUploadResponse",
        description:'',
        tags:''
    });

    a({
        id:1362,
        title:"FileHashCalculator",
        content:"FileHashCalculator",
        description:'',
        tags:''
    });

    a({
        id:1363,
        title:"CakeEnvironment",
        content:"CakeEnvironment",
        description:'',
        tags:''
    });

    a({
        id:1364,
        title:"IssuesArgumentChecks",
        content:"IssuesArgumentChecks",
        description:'',
        tags:''
    });

    a({
        id:1365,
        title:"ManifestProvider",
        content:"ManifestProvider",
        description:'',
        tags:''
    });

    a({
        id:1366,
        title:"ConvertableDirectoryPath",
        content:"ConvertableDirectoryPath",
        description:'',
        tags:''
    });

    a({
        id:1367,
        title:"CakeEnvironmentExtensions",
        content:"CakeEnvironmentExtensions",
        description:'',
        tags:''
    });

    a({
        id:1368,
        title:"NetCoreProject",
        content:"NetCoreProject",
        description:'',
        tags:''
    });

    a({
        id:1369,
        title:"VagrantProvisionerSettings",
        content:"VagrantProvisionerSettings",
        description:'',
        tags:''
    });

    a({
        id:1370,
        title:"NuGetMSBuildVersion",
        content:"NuGetMSBuildVersion",
        description:'',
        tags:''
    });

    a({
        id:1371,
        title:"ErrorResult",
        content:"ErrorResult",
        description:'',
        tags:''
    });

    a({
        id:1372,
        title:"EfMigratorBackend",
        content:"EfMigratorBackend",
        description:'',
        tags:''
    });

    a({
        id:1373,
        title:"SimCtlTool",
        content:"SimCtlTool",
        description:'',
        tags:''
    });

    a({
        id:1374,
        title:"SimulatorTool",
        content:"SimulatorTool",
        description:'',
        tags:''
    });

    a({
        id:1375,
        title:"VsceAliases",
        content:"VsceAliases",
        description:'',
        tags:''
    });

    a({
        id:1376,
        title:"SignToolSignRunner",
        content:"SignToolSignRunner",
        description:'',
        tags:''
    });

    a({
        id:1377,
        title:"CakeMailSettings",
        content:"CakeMailSettings",
        description:'',
        tags:''
    });

    a({
        id:1378,
        title:"WebServerProvider",
        content:"WebServerProvider",
        description:'',
        tags:''
    });

    a({
        id:1379,
        title:"WyamSettings",
        content:"WyamSettings",
        description:'',
        tags:''
    });

    a({
        id:1380,
        title:"DockerComposeUpSettings",
        content:"DockerComposeUpSettings",
        description:'',
        tags:''
    });

    a({
        id:1381,
        title:"GitVersionRunner",
        content:"GitVersionRunner",
        description:'',
        tags:''
    });

    a({
        id:1382,
        title:"MDToolSetupRunner",
        content:"MDToolSetupRunner",
        description:'',
        tags:''
    });

    a({
        id:1383,
        title:"ProcessAliases",
        content:"ProcessAliases",
        description:'',
        tags:''
    });

    a({
        id:1384,
        title:"SpecFlowTool",
        content:"SpecFlowTool",
        description:'',
        tags:''
    });

    a({
        id:1385,
        title:"IExecutionStrategy",
        content:"IExecutionStrategy",
        description:'',
        tags:''
    });

    a({
        id:1386,
        title:"TravisCIEnvironmentInfo",
        content:"TravisCIEnvironmentInfo",
        description:'',
        tags:''
    });

    a({
        id:1387,
        title:"DockerComposeRunSettings",
        content:"DockerComposeRunSettings",
        description:'',
        tags:''
    });

    a({
        id:1388,
        title:"IStrongNameToolResolver",
        content:"IStrongNameToolResolver",
        description:'',
        tags:''
    });

    a({
        id:1389,
        title:"AppVeyorProvider",
        content:"AppVeyorProvider",
        description:'',
        tags:''
    });

    a({
        id:1390,
        title:"TeamCityProvider",
        content:"TeamCityProvider",
        description:'',
        tags:''
    });

    a({
        id:1391,
        title:"AzureKeyVaultAuthMethod",
        content:"AzureKeyVaultAuthMethod",
        description:'',
        tags:''
    });

    a({
        id:1392,
        title:"PullRequestsAliasConstants",
        content:"PullRequestsAliasConstants",
        description:'',
        tags:''
    });

    a({
        id:1393,
        title:"IServiceManager",
        content:"IServiceManager",
        description:'',
        tags:''
    });

    a({
        id:1394,
        title:"SyncSettingsExtensions",
        content:"SyncSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1395,
        title:"AdbLogcatOptions",
        content:"AdbLogcatOptions",
        description:'',
        tags:''
    });

    a({
        id:1396,
        title:"ListKeyValueMapsSettings",
        content:"ListKeyValueMapsSettings",
        description:'',
        tags:''
    });

    a({
        id:1397,
        title:"MSBuildBinaryLogImports",
        content:"MSBuildBinaryLogImports",
        description:'',
        tags:''
    });

    a({
        id:1398,
        title:"ConsoleExtensions",
        content:"ConsoleExtensions",
        description:'',
        tags:''
    });

    a({
        id:1399,
        title:"DocFxAliases",
        content:"DocFxAliases",
        description:'',
        tags:''
    });

    a({
        id:1400,
        title:"TaskTeardownEventArgs",
        content:"TaskTeardownEventArgs",
        description:'',
        tags:''
    });

    a({
        id:1401,
        title:"MobileCenterTestStatusSettings",
        content:"MobileCenterTestStatusSettings",
        description:'',
        tags:''
    });

    a({
        id:1402,
        title:"VagrantUpSettings",
        content:"VagrantUpSettings",
        description:'',
        tags:''
    });

    a({
        id:1403,
        title:"Architecture",
        content:"Architecture",
        description:'',
        tags:''
    });

    a({
        id:1404,
        title:"MyGetBuildStatus",
        content:"MyGetBuildStatus",
        description:'',
        tags:''
    });

    a({
        id:1405,
        title:"CakeNamespaceImportAttribute",
        content:"CakeNamespaceImportAttribute",
        description:'',
        tags:''
    });

    a({
        id:1406,
        title:"TFBuildDefinitionInfo",
        content:"TFBuildDefinitionInfo",
        description:'',
        tags:''
    });

    a({
        id:1407,
        title:"SquirrelSettings",
        content:"SquirrelSettings",
        description:'',
        tags:''
    });

    a({
        id:1408,
        title:"AdbPermissionGroupInfo",
        content:"AdbPermissionGroupInfo",
        description:'',
        tags:''
    });

    a({
        id:1409,
        title:"GulpRunnerAliases",
        content:"GulpRunnerAliases",
        description:'',
        tags:''
    });

    a({
        id:1410,
        title:"ContinuaCIInfo",
        content:"ContinuaCIInfo",
        description:'',
        tags:''
    });

    a({
        id:1411,
        title:"TerraformEnvListRunner",
        content:"TerraformEnvListRunner",
        description:'',
        tags:''
    });

    a({
        id:1412,
        title:"AppVeyorBuildInfo",
        content:"AppVeyorBuildInfo",
        description:'',
        tags:''
    });

    a({
        id:1413,
        title:"XamarinComponentSettings",
        content:"XamarinComponentSettings",
        description:'',
        tags:''
    });

    a({
        id:1414,
        title:"GoCDPipelineInfo",
        content:"GoCDPipelineInfo",
        description:'',
        tags:''
    });

    a({
        id:1415,
        title:"FakeRuleDescription",
        content:"FakeRuleDescription",
        description:'',
        tags:''
    });

    a({
        id:1416,
        title:"GitVersionAliases",
        content:"GitVersionAliases",
        description:'',
        tags:''
    });

    a({
        id:1417,
        title:"CLIReporterSettingsExtensions",
        content:"CLIReporterSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1418,
        title:"DeploySettingsExtensions",
        content:"DeploySettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1419,
        title:"ReleaseNotesParser",
        content:"ReleaseNotesParser",
        description:'',
        tags:''
    });

    a({
        id:1420,
        title:"MobileCenterAppsDeleteSettings",
        content:"MobileCenterAppsDeleteSettings",
        description:'',
        tags:''
    });

    a({
        id:1421,
        title:"MobileCenterBuildLogsSettings",
        content:"MobileCenterBuildLogsSettings",
        description:'',
        tags:''
    });

    a({
        id:1422,
        title:"CakeTaskBuilder",
        content:"CakeTaskBuilder",
        description:'',
        tags:''
    });

    a({
        id:1423,
        title:"SqlPackagePublishSettings",
        content:"SqlPackagePublishSettings",
        description:'',
        tags:''
    });

    a({
        id:1424,
        title:"NUnitAppDomainUsage",
        content:"NUnitAppDomainUsage",
        description:'',
        tags:''
    });

    a({
        id:1425,
        title:"WebpackRunnerAliases",
        content:"WebpackRunnerAliases",
        description:'',
        tags:''
    });

    a({
        id:1426,
        title:"VagrantBoxRemoveSettings",
        content:"VagrantBoxRemoveSettings",
        description:'',
        tags:''
    });

    a({
        id:1427,
        title:"ArgumentsBuilderExtension",
        content:"ArgumentsBuilderExtension",
        description:'',
        tags:''
    });

    a({
        id:1428,
        title:"FakeRuleUrlResolver",
        content:"FakeRuleUrlResolver",
        description:'',
        tags:''
    });

    a({
        id:1429,
        title:"CakeAliasAttribute",
        content:"CakeAliasAttribute",
        description:'',
        tags:''
    });

    a({
        id:1430,
        title:"ContinuaCIProvider",
        content:"ContinuaCIProvider",
        description:'',
        tags:''
    });

    a({
        id:1431,
        title:"DockerComposeSettings",
        content:"DockerComposeSettings",
        description:'',
        tags:''
    });

    a({
        id:1432,
        title:"AppVeyorAliases",
        content:"AppVeyorAliases",
        description:'',
        tags:''
    });

    a({
        id:1433,
        title:"ScriptAnalyzer",
        content:"ScriptAnalyzer",
        description:'',
        tags:''
    });

    a({
        id:1434,
        title:"CSharpGeneratorSettings",
        content:"CSharpGeneratorSettings",
        description:'',
        tags:''
    });

    a({
        id:1435,
        title:"IScriptProcessor",
        content:"IScriptProcessor",
        description:'',
        tags:''
    });

    a({
        id:1436,
        title:"AppVeyorSettings",
        content:"AppVeyorSettings",
        description:'',
        tags:''
    });

    a({
        id:1437,
        title:"AppVeyorTestResultsType",
        content:"AppVeyorTestResultsType",
        description:'',
        tags:''
    });

    a({
        id:1438,
        title:"EmailResult",
        content:"EmailResult",
        description:'',
        tags:''
    });

    a({
        id:1439,
        title:"ITransformer",
        content:"ITransformer",
        description:'',
        tags:''
    });

    a({
        id:1440,
        title:"EmberSettings",
        content:"EmberSettings",
        description:'',
        tags:''
    });

    a({
        id:1441,
        title:"CakeReport",
        content:"CakeReport",
        description:'',
        tags:''
    });

    a({
        id:1442,
        title:"SqlPackageAliases",
        content:"SqlPackageAliases",
        description:'',
        tags:''
    });

    a({
        id:1443,
        title:"DotNetBuildSettings",
        content:"DotNetBuildSettings",
        description:'',
        tags:''
    });

    a({
        id:1444,
        title:"DockerNetworkConnectSettings",
        content:"DockerNetworkConnectSettings",
        description:'',
        tags:''
    });

    a({
        id:1445,
        title:"SqlQueryAliases",
        content:"SqlQueryAliases",
        description:'',
        tags:''
    });

    a({
        id:1446,
        title:"NpmInstallAliases",
        content:"NpmInstallAliases",
        description:'',
        tags:''
    });

    a({
        id:1447,
        title:"BitriseProvider",
        content:"BitriseProvider",
        description:'',
        tags:''
    });

    a({
        id:1448,
        title:"DotNetCoreBuildSettings",
        content:"DotNetCoreBuildSettings",
        description:'',
        tags:''
    });

    a({
        id:1449,
        title:"SignToolSignSettings",
        content:"SignToolSignSettings",
        description:'',
        tags:''
    });

    a({
        id:1450,
        title:"GenymotionLicense",
        content:"GenymotionLicense",
        description:'',
        tags:''
    });

    a({
        id:1451,
        title:"DockerContainerRunSettings",
        content:"DockerContainerRunSettings",
        description:'',
        tags:''
    });

    a({
        id:1452,
        title:"JenkinsBuildInfo",
        content:"JenkinsBuildInfo",
        description:'',
        tags:''
    });

    a({
        id:1453,
        title:"SetParameter",
        content:"SetParameter",
        description:'',
        tags:''
    });

    a({
        id:1454,
        title:"EmberAliases",
        content:"EmberAliases",
        description:'',
        tags:''
    });

    a({
        id:1455,
        title:"MsDeployAliases",
        content:"MsDeployAliases",
        description:'',
        tags:''
    });

    a({
        id:1456,
        title:"MicrosoftTeamsSettings",
        content:"MicrosoftTeamsSettings",
        description:'',
        tags:''
    });

    a({
        id:1457,
        title:"ILogger",
        content:"ILogger",
        description:'',
        tags:''
    });

    a({
        id:1458,
        title:"VagrantBoxUpdateSettingsExtensions",
        content:"VagrantBoxUpdateSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1459,
        title:"AppleSimulatorRuntime",
        content:"AppleSimulatorRuntime",
        description:'',
        tags:''
    });

    a({
        id:1460,
        title:"GulpRunner",
        content:"GulpRunner",
        description:'',
        tags:''
    });

    a({
        id:1461,
        title:"MSBuildSettingsExtensions",
        content:"MSBuildSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1462,
        title:"DockerContainerLogsSettings",
        content:"DockerContainerLogsSettings",
        description:'',
        tags:''
    });

    a({
        id:1463,
        title:"ProcessArgumentBuilder",
        content:"ProcessArgumentBuilder",
        description:'',
        tags:''
    });

    a({
        id:1464,
        title:"TransifexInitSettings",
        content:"TransifexInitSettings",
        description:'',
        tags:''
    });

    a({
        id:1465,
        title:"PackageManagerAliases",
        content:"PackageManagerAliases",
        description:'',
        tags:''
    });

    a({
        id:1466,
        title:"EsLintIssuesAliases",
        content:"EsLintIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:1467,
        title:"ICredentialSettings",
        content:"ICredentialSettings",
        description:'',
        tags:''
    });

    a({
        id:1468,
        title:"JMeterAliases",
        content:"JMeterAliases",
        description:'',
        tags:''
    });

    a({
        id:1469,
        title:"MobileCenterAppsUpdateSettings",
        content:"MobileCenterAppsUpdateSettings",
        description:'',
        tags:''
    });

    a({
        id:1470,
        title:"MobileCenterTokensCreateSettings",
        content:"MobileCenterTokensCreateSettings",
        description:'',
        tags:''
    });

    a({
        id:1471,
        title:"IssuesReader",
        content:"IssuesReader",
        description:'',
        tags:''
    });

    a({
        id:1472,
        title:"GenymotionLicenseType",
        content:"GenymotionLicenseType",
        description:'',
        tags:''
    });

    a({
        id:1473,
        title:"SqlServerPackagerExtensions",
        content:"SqlServerPackagerExtensions",
        description:'',
        tags:''
    });

    a({
        id:1474,
        title:"GitLink Settings",
        content:"GitLink Settings",
        description:'',
        tags:''
    });

    a({
        id:1475,
        title:"KeyValueMap",
        content:"KeyValueMap",
        description:'',
        tags:''
    });

    a({
        id:1476,
        title:"GenymotionReturnCode",
        content:"GenymotionReturnCode",
        description:'',
        tags:''
    });

    a({
        id:1477,
        title:"AvailableAndroidSdkUpdate",
        content:"AvailableAndroidSdkUpdate",
        description:'',
        tags:''
    });

    a({
        id:1478,
        title:"AppVeyorInfo",
        content:"AppVeyorInfo",
        description:'',
        tags:''
    });

    a({
        id:1479,
        title:"GitterMessageLevel",
        content:"GitterMessageLevel",
        description:'',
        tags:''
    });

    a({
        id:1480,
        title:"AssertExtensions",
        content:"AssertExtensions",
        description:'',
        tags:''
    });

    a({
        id:1481,
        title:"SqlServerPackagerSettings",
        content:"SqlServerPackagerSettings",
        description:'',
        tags:''
    });

    a({
        id:1482,
        title:"OrchardAliases",
        content:"OrchardAliases",
        description:'',
        tags:''
    });

    a({
        id:1483,
        title:"WebSite",
        content:"WebSite",
        description:'',
        tags:''
    });

    a({
        id:1484,
        title:"AppleSimulator",
        content:"AppleSimulator",
        description:'',
        tags:''
    });

    a({
        id:1485,
        title:"GitLabCIServerInfo",
        content:"GitLabCIServerInfo",
        description:'',
        tags:''
    });

    a({
        id:1486,
        title:"SecretArgumentAttribute",
        content:"SecretArgumentAttribute",
        description:'',
        tags:''
    });

    a({
        id:1487,
        title:"JsonArray",
        content:"JsonArray",
        description:'',
        tags:''
    });

    a({
        id:1488,
        title:"GulpLocalRunnerSettings",
        content:"GulpLocalRunnerSettings",
        description:'',
        tags:''
    });

    a({
        id:1489,
        title:"InnoSetupAliases",
        content:"InnoSetupAliases",
        description:'',
        tags:''
    });

    a({
        id:1490,
        title:"ICakeReportPrinter",
        content:"ICakeReportPrinter",
        description:'',
        tags:''
    });

    a({
        id:1491,
        title:"NuGetInstallSettings",
        content:"NuGetInstallSettings",
        description:'',
        tags:''
    });

    a({
        id:1492,
        title:"ReportUnitRunner",
        content:"ReportUnitRunner",
        description:'',
        tags:''
    });

    a({
        id:1493,
        title:"MSBuildRunner",
        content:"MSBuildRunner",
        description:'',
        tags:''
    });

    a({
        id:1494,
        title:"DotNetCoreRunner",
        content:"DotNetCoreRunner",
        description:'',
        tags:''
    });

    a({
        id:1495,
        title:"TerraformDestroyRunner",
        content:"TerraformDestroyRunner",
        description:'',
        tags:''
    });

    a({
        id:1496,
        title:"ILRepackAliases",
        content:"ILRepackAliases",
        description:'',
        tags:''
    });

    a({
        id:1497,
        title:"CakeBuildLog",
        content:"CakeBuildLog",
        description:'',
        tags:''
    });

    a({
        id:1498,
        title:"OpenCoverRunner",
        content:"OpenCoverRunner",
        description:'',
        tags:''
    });

    a({
        id:1499,
        title:"DeploySettings",
        content:"DeploySettings",
        description:'',
        tags:''
    });

    a({
        id:1500,
        title:"DeleteApiProxyRevisionSettings",
        content:"DeleteApiProxyRevisionSettings",
        description:'',
        tags:''
    });

    a({
        id:1501,
        title:"IResxConverterOutputFactory",
        content:"IResxConverterOutputFactory",
        description:'',
        tags:''
    });

    a({
        id:1502,
        title:"NewmanSettingsExtensions",
        content:"NewmanSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1503,
        title:"MsBuildRuleDescription",
        content:"MsBuildRuleDescription",
        description:'',
        tags:''
    });

    a({
        id:1504,
        title:"GoCDStageInfo",
        content:"GoCDStageInfo",
        description:'',
        tags:''
    });

    a({
        id:1505,
        title:"CakeMailAliases",
        content:"CakeMailAliases",
        description:'',
        tags:''
    });

    a({
        id:1506,
        title:"PdfPageMargins",
        content:"PdfPageMargins",
        description:'',
        tags:''
    });

    a({
        id:1507,
        title:"DockerImagePullSettings",
        content:"DockerImagePullSettings",
        description:'',
        tags:''
    });

    a({
        id:1508,
        title:"CakeContextExtensions",
        content:"CakeContextExtensions",
        description:'',
        tags:''
    });

    a({
        id:1509,
        title:"GitReleaseManagerPublisher",
        content:"GitReleaseManagerPublisher",
        description:'',
        tags:''
    });

    a({
        id:1510,
        title:"VsixSignToolVerifySettings",
        content:"VsixSignToolVerifySettings",
        description:'',
        tags:''
    });

    a({
        id:1511,
        title:"IFluentMigratorToolResolver",
        content:"IFluentMigratorToolResolver",
        description:'',
        tags:''
    });

    a({
        id:1512,
        title:"StrongNameToolSettings",
        content:"StrongNameToolSettings",
        description:'',
        tags:''
    });

    a({
        id:1513,
        title:"GitLink Aliases",
        content:"GitLink Aliases",
        description:'',
        tags:''
    });

    a({
        id:1514,
        title:"AppPacker",
        content:"AppPacker",
        description:'',
        tags:''
    });

    a({
        id:1515,
        title:"AutoPropertyAttribute",
        content:"AutoPropertyAttribute",
        description:'',
        tags:''
    });

    a({
        id:1516,
        title:"SynVerAliases",
        content:"SynVerAliases",
        description:'',
        tags:''
    });

    a({
        id:1517,
        title:"SpecFlowStepDefinitionReportSettings",
        content:"SpecFlowStepDefinitionReportSettings",
        description:'',
        tags:''
    });

    a({
        id:1518,
        title:"ITaskTeardownContext",
        content:"ITaskTeardownContext",
        description:'',
        tags:''
    });

    a({
        id:1519,
        title:"BitbucketPipelinesInfo",
        content:"BitbucketPipelinesInfo",
        description:'',
        tags:''
    });

    a({
        id:1520,
        title:"FileChange",
        content:"FileChange",
        description:'',
        tags:''
    });

    a({
        id:1521,
        title:"EmberServeRunner",
        content:"EmberServeRunner",
        description:'',
        tags:''
    });

    a({
        id:1522,
        title:"VSWhereAll",
        content:"VSWhereAll",
        description:'',
        tags:''
    });

    a({
        id:1523,
        title:"Credentials",
        content:"Credentials",
        description:'',
        tags:''
    });

    a({
        id:1524,
        title:"InnoSetupSettings",
        content:"InnoSetupSettings",
        description:'',
        tags:''
    });

    a({
        id:1525,
        title:"AndroidSdkChannel",
        content:"AndroidSdkChannel",
        description:'',
        tags:''
    });

    a({
        id:1526,
        title:"ChocolateyConfigSetter",
        content:"ChocolateyConfigSetter",
        description:'',
        tags:''
    });

    a({
        id:1527,
        title:"IProcess",
        content:"IProcess",
        description:'',
        tags:''
    });

    a({
        id:1528,
        title:"CertStoreSettingsProvider",
        content:"CertStoreSettingsProvider",
        description:'',
        tags:''
    });

    a({
        id:1529,
        title:"ReadIssuesSettings",
        content:"ReadIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:1530,
        title:"TransifexRunnerSettings",
        content:"TransifexRunnerSettings",
        description:'',
        tags:''
    });

    a({
        id:1531,
        title:"NoteType",
        content:"NoteType",
        description:'',
        tags:''
    });

    a({
        id:1532,
        title:"ICakeEngine",
        content:"ICakeEngine",
        description:'',
        tags:''
    });

    a({
        id:1533,
        title:"VagrantCommandRunner",
        content:"VagrantCommandRunner",
        description:'',
        tags:''
    });

    a({
        id:1534,
        title:"DotNetCorePublishSettings",
        content:"DotNetCorePublishSettings",
        description:'',
        tags:''
    });

    a({
        id:1535,
        title:"AppHostConfigProvider",
        content:"AppHostConfigProvider",
        description:'',
        tags:''
    });

    a({
        id:1536,
        title:"ILogFileFormat",
        content:"ILogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:1537,
        title:"XUnit Settings",
        content:"XUnit Settings",
        description:'',
        tags:''
    });

    a({
        id:1538,
        title:"TeamCityBuildInfo",
        content:"TeamCityBuildInfo",
        description:'',
        tags:''
    });

    a({
        id:1539,
        title:"MSBuildFileLogger",
        content:"MSBuildFileLogger",
        description:'',
        tags:''
    });

    a({
        id:1540,
        title:"DotNetCoreEfMigrationAdder",
        content:"DotNetCoreEfMigrationAdder",
        description:'',
        tags:''
    });

    a({
        id:1541,
        title:"ChocolateyApiKeySetter",
        content:"ChocolateyApiKeySetter",
        description:'',
        tags:''
    });

    a({
        id:1542,
        title:"TestResults",
        content:"TestResults",
        description:'',
        tags:''
    });

    a({
        id:1543,
        title:"RuntimeTheory",
        content:"RuntimeTheory",
        description:'',
        tags:''
    });

    a({
        id:1544,
        title:"NpmPublishAliases",
        content:"NpmPublishAliases",
        description:'',
        tags:''
    });

    a({
        id:1545,
        title:"LogLevel",
        content:"LogLevel",
        description:'',
        tags:''
    });

    a({
        id:1546,
        title:"DotNetCoreEfMigrationScriptSettings",
        content:"DotNetCoreEfMigrationScriptSettings",
        description:'',
        tags:''
    });

    a({
        id:1547,
        title:"GitLinkRunner",
        content:"GitLinkRunner",
        description:'',
        tags:''
    });

    a({
        id:1548,
        title:"AdbToolSettings",
        content:"AdbToolSettings",
        description:'',
        tags:''
    });

    a({
        id:1549,
        title:"MobileCenterTestRunEspressoSettings",
        content:"MobileCenterTestRunEspressoSettings",
        description:'',
        tags:''
    });

    a({
        id:1550,
        title:"GemBuildRunner",
        content:"GemBuildRunner",
        description:'',
        tags:''
    });

    a({
        id:1551,
        title:"DockerComposeBuildSettings",
        content:"DockerComposeBuildSettings",
        description:'',
        tags:''
    });

    a({
        id:1552,
        title:"OctoVariable",
        content:"OctoVariable",
        description:'',
        tags:''
    });

    a({
        id:1553,
        title:"SyncPath",
        content:"SyncPath",
        description:'',
        tags:''
    });

    a({
        id:1554,
        title:"NuGetPushSettings",
        content:"NuGetPushSettings",
        description:'',
        tags:''
    });

    a({
        id:1555,
        title:"AdbPackageListInfo",
        content:"AdbPackageListInfo",
        description:'',
        tags:''
    });

    a({
        id:1556,
        title:"PathSettings",
        content:"PathSettings",
        description:'',
        tags:''
    });

    a({
        id:1557,
        title:"MobileCenterTestStopSettings",
        content:"MobileCenterTestStopSettings",
        description:'',
        tags:''
    });

    a({
        id:1558,
        title:"CakeLogger",
        content:"CakeLogger",
        description:'',
        tags:''
    });

    a({
        id:1559,
        title:"DockerContainerCpSettings",
        content:"DockerContainerCpSettings",
        description:'',
        tags:''
    });

    a({
        id:1560,
        title:"DockerAliases",
        content:"DockerAliases",
        description:'',
        tags:''
    });

    a({
        id:1561,
        title:"ContentPathProvider",
        content:"ContentPathProvider",
        description:'',
        tags:''
    });

    a({
        id:1562,
        title:"XcStudioAliases",
        content:"XcStudioAliases",
        description:'',
        tags:''
    });

    a({
        id:1563,
        title:"AzureStorageSettings",
        content:"AzureStorageSettings",
        description:'',
        tags:''
    });

    a({
        id:1564,
        title:"MobileCenterDistributeReleasesListSettings",
        content:"MobileCenterDistributeReleasesListSettings",
        description:'',
        tags:''
    });

    a({
        id:1565,
        title:"MigrationResult",
        content:"MigrationResult",
        description:'',
        tags:''
    });

    a({
        id:1566,
        title:"SqlPackageExportSettings",
        content:"SqlPackageExportSettings",
        description:'',
        tags:''
    });

    a({
        id:1567,
        title:"ReportGeneratorVerbosity",
        content:"ReportGeneratorVerbosity",
        description:'',
        tags:''
    });

    a({
        id:1568,
        title:"Route Aliases",
        content:"Route Aliases",
        description:'',
        tags:''
    });

    a({
        id:1569,
        title:"Program",
        content:"Program",
        description:'',
        tags:''
    });

    a({
        id:1570,
        title:"GitLabCIBuildInfo",
        content:"GitLabCIBuildInfo",
        description:'',
        tags:''
    });

    a({
        id:1571,
        title:"ScriptProcessor",
        content:"ScriptProcessor",
        description:'',
        tags:''
    });

    a({
        id:1572,
        title:"BitriseEnvironmentInfo",
        content:"BitriseEnvironmentInfo",
        description:'',
        tags:''
    });

    a({
        id:1573,
        title:"DotCoverSettings",
        content:"DotCoverSettings",
        description:'',
        tags:''
    });

    a({
        id:1574,
        title:"FilePathProvider",
        content:"FilePathProvider",
        description:'',
        tags:''
    });

    a({
        id:1575,
        title:"AppleSimulatorAliases",
        content:"AppleSimulatorAliases",
        description:'',
        tags:''
    });

    a({
        id:1576,
        title:"VscePublisher",
        content:"VscePublisher",
        description:'',
        tags:''
    });

    a({
        id:1577,
        title:"NpmPacker",
        content:"NpmPacker",
        description:'',
        tags:''
    });

    a({
        id:1578,
        title:"DotNetCliToolReference",
        content:"DotNetCliToolReference",
        description:'',
        tags:''
    });

    a({
        id:1579,
        title:"VagrantUpSettingsExtensions",
        content:"VagrantUpSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1580,
        title:"VSWhereSettings",
        content:"VSWhereSettings",
        description:'',
        tags:''
    });

    a({
        id:1581,
        title:"EC SettingsExtensions",
        content:"EC SettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1582,
        title:"ProjectParser",
        content:"ProjectParser",
        description:'',
        tags:''
    });

    a({
        id:1583,
        title:"ToolFixture",
        content:"ToolFixture",
        description:'',
        tags:''
    });

    a({
        id:1584,
        title:"AppVeyorEnvironmentInfo",
        content:"AppVeyorEnvironmentInfo",
        description:'',
        tags:''
    });

    a({
        id:1585,
        title:"ProjectAliases",
        content:"ProjectAliases",
        description:'',
        tags:''
    });

    a({
        id:1586,
        title:"IScriptAliasFinder",
        content:"IScriptAliasFinder",
        description:'',
        tags:''
    });

    a({
        id:1587,
        title:"GoCDRepositoryInfo",
        content:"GoCDRepositoryInfo",
        description:'',
        tags:''
    });

    a({
        id:1588,
        title:"DotNetCoreNuGetDeleteSettings",
        content:"DotNetCoreNuGetDeleteSettings",
        description:'',
        tags:''
    });

    a({
        id:1589,
        title:"DotCoverCoverageTool",
        content:"DotCoverCoverageTool",
        description:'',
        tags:''
    });

    a({
        id:1590,
        title:"TypeScriptGeneratorSettingsExtensions",
        content:"TypeScriptGeneratorSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1591,
        title:"CMakeSettings",
        content:"CMakeSettings",
        description:'',
        tags:''
    });

    a({
        id:1592,
        title:"VSWhereAliases",
        content:"VSWhereAliases",
        description:'',
        tags:''
    });

    a({
        id:1593,
        title:"PdfPageOrientation",
        content:"PdfPageOrientation",
        description:'',
        tags:''
    });

    a({
        id:1594,
        title:"MicrosoftTeamsMessageCard",
        content:"MicrosoftTeamsMessageCard",
        description:'',
        tags:''
    });

    a({
        id:1595,
        title:"GitBranch",
        content:"GitBranch",
        description:'',
        tags:''
    });

    a({
        id:1596,
        title:"DotCoverCoverageSettings",
        content:"DotCoverCoverageSettings",
        description:'',
        tags:''
    });

    a({
        id:1597,
        title:"WindowsFact",
        content:"WindowsFact",
        description:'',
        tags:''
    });

    a({
        id:1598,
        title:"NUnitSettings",
        content:"NUnitSettings",
        description:'',
        tags:''
    });

    a({
        id:1599,
        title:"AndroidScreenDensity",
        content:"AndroidScreenDensity",
        description:'',
        tags:''
    });

    a({
        id:1600,
        title:"NUnit Result",
        content:"NUnit Result",
        description:'',
        tags:''
    });

    a({
        id:1601,
        title:"SpecFlowTestExecutionReportSettings",
        content:"SpecFlowTestExecutionReportSettings",
        description:'',
        tags:''
    });

    a({
        id:1602,
        title:"Directory",
        content:"Directory",
        description:'',
        tags:''
    });

    a({
        id:1603,
        title:"LocalDbAliases",
        content:"LocalDbAliases",
        description:'',
        tags:''
    });

    a({
        id:1604,
        title:"WinScpRunner",
        content:"WinScpRunner",
        description:'',
        tags:''
    });

    a({
        id:1605,
        title:"MySqlQueryRepository",
        content:"MySqlQueryRepository",
        description:'',
        tags:''
    });

    a({
        id:1606,
        title:"DotNetCoreExecuteSettings",
        content:"DotNetCoreExecuteSettings",
        description:'',
        tags:''
    });

    a({
        id:1607,
        title:"TfxExtensionShareSettings",
        content:"TfxExtensionShareSettings",
        description:'',
        tags:''
    });

    a({
        id:1608,
        title:"FtpService",
        content:"FtpService",
        description:'',
        tags:''
    });

    a({
        id:1609,
        title:"RepositorySettings",
        content:"RepositorySettings",
        description:'',
        tags:''
    });

    a({
        id:1610,
        title:"DownloadFileSettings",
        content:"DownloadFileSettings",
        description:'',
        tags:''
    });

    a({
        id:1611,
        title:"TextTransformAliases",
        content:"TextTransformAliases",
        description:'',
        tags:''
    });

    a({
        id:1612,
        title:"VagrantBoxAddSettings",
        content:"VagrantBoxAddSettings",
        description:'',
        tags:''
    });

    a({
        id:1613,
        title:"XCodeSdk",
        content:"XCodeSdk",
        description:'',
        tags:''
    });

    a({
        id:1614,
        title:"ComObject Provider",
        content:"ComObject Provider",
        description:'',
        tags:''
    });

    a({
        id:1615,
        title:"ParameterKind",
        content:"ParameterKind",
        description:'',
        tags:''
    });

    a({
        id:1616,
        title:"VagrantAliases",
        content:"VagrantAliases",
        description:'',
        tags:''
    });

    a({
        id:1617,
        title:"DotNetCoreNuGetPushSettings",
        content:"DotNetCoreNuGetPushSettings",
        description:'',
        tags:''
    });

    a({
        id:1618,
        title:"ITFBuildCommands",
        content:"ITFBuildCommands",
        description:'',
        tags:''
    });

    a({
        id:1619,
        title:"NuGetUpdateSettings",
        content:"NuGetUpdateSettings",
        description:'',
        tags:''
    });

    a({
        id:1620,
        title:"DotNetCoreEfTool",
        content:"DotNetCoreEfTool",
        description:'',
        tags:''
    });

    a({
        id:1621,
        title:"StringExtensions",
        content:"StringExtensions",
        description:'',
        tags:''
    });

    a({
        id:1622,
        title:"BumpyRunner",
        content:"BumpyRunner",
        description:'',
        tags:''
    });

    a({
        id:1623,
        title:"CoverallsAliases",
        content:"CoverallsAliases",
        description:'',
        tags:''
    });

    a({
        id:1624,
        title:"NpmRunScriptSettingsExtensions",
        content:"NpmRunScriptSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1625,
        title:"Logger",
        content:"Logger",
        description:'',
        tags:''
    });

    a({
        id:1626,
        title:"FtpAliases",
        content:"FtpAliases",
        description:'',
        tags:''
    });

    a({
        id:1627,
        title:"DockerComposeTool",
        content:"DockerComposeTool",
        description:'',
        tags:''
    });

    a({
        id:1628,
        title:"ILoadDirectiveProvider",
        content:"ILoadDirectiveProvider",
        description:'',
        tags:''
    });

    a({
        id:1629,
        title:"CakePlatformExtensions",
        content:"CakePlatformExtensions",
        description:'',
        tags:''
    });

    a({
        id:1630,
        title:"BoolParameterAttribute",
        content:"BoolParameterAttribute",
        description:'',
        tags:''
    });

    a({
        id:1631,
        title:"TravisCIDisposableExtensions",
        content:"TravisCIDisposableExtensions",
        description:'',
        tags:''
    });

    a({
        id:1632,
        title:"HipChatAliases",
        content:"HipChatAliases",
        description:'',
        tags:''
    });

    a({
        id:1633,
        title:"ICloudFrontManager",
        content:"ICloudFrontManager",
        description:'',
        tags:''
    });

    a({
        id:1634,
        title:"VagrantPackageSettings",
        content:"VagrantPackageSettings",
        description:'',
        tags:''
    });

    a({
        id:1635,
        title:"StrongNameToolRunner",
        content:"StrongNameToolRunner",
        description:'',
        tags:''
    });

    a({
        id:1636,
        title:"GenymotionSimulatorTemplate",
        content:"GenymotionSimulatorTemplate",
        description:'',
        tags:''
    });

    a({
        id:1637,
        title:"CreateKeyValueMapResult",
        content:"CreateKeyValueMapResult",
        description:'',
        tags:''
    });

    a({
        id:1638,
        title:"GacInstallProvider",
        content:"GacInstallProvider",
        description:'',
        tags:''
    });

    a({
        id:1639,
        title:"XCRunTool",
        content:"XCRunTool",
        description:'',
        tags:''
    });

    a({
        id:1640,
        title:"DeclareParameter",
        content:"DeclareParameter",
        description:'',
        tags:''
    });

    a({
        id:1641,
        title:"AdbDeviceInfo",
        content:"AdbDeviceInfo",
        description:'',
        tags:''
    });

    a({
        id:1642,
        title:"FakeIssueProvider",
        content:"FakeIssueProvider",
        description:'',
        tags:''
    });

    a({
        id:1643,
        title:"ContainerRegistrarExtensions",
        content:"ContainerRegistrarExtensions",
        description:'',
        tags:''
    });

    a({
        id:1644,
        title:"NpmInstallSettingsExtensions",
        content:"NpmInstallSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:1645,
        title:"Path",
        content:"Path",
        description:'',
        tags:''
    });

    a({
        id:1646,
        title:"Script",
        content:"Script",
        description:'',
        tags:''
    });

    a({
        id:1647,
        title:"TerraformInitRunner",
        content:"TerraformInitRunner",
        description:'',
        tags:''
    });

    a({
        id:1648,
        title:"JsonObject",
        content:"JsonObject",
        description:'',
        tags:''
    });

    y({
        url:'/api/Cake.Git/GitSignature',
        title:"GitSignature",
        description:""
    });

    y({
        url:'/api/Cake.Email/EmailSettings',
        title:"EmailSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Update/NuGetUpdater',
        title:"NuGetUpdater",
        description:""
    });

    y({
        url:'/api/Cake.Npm/NpmRunScriptAliases',
        title:"NpmRunScriptAliases",
        description:""
    });

    y({
        url:'/api/Cake.Tfx.Extension.Publish/TfxExtensionPublishSettings',
        title:"TfxExtensionPublishSettings",
        description:""
    });

    y({
        url:'/api/Cake.Curl/CurlDownloadSettings',
        title:"CurlDownloadSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor/AppVeyorMessageCategoryType',
        title:"AppVeyorMessageCategoryType",
        description:""
    });

    y({
        url:'/api/Cake.Npm.Pack/NpmPackSettings',
        title:"NpmPackSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/IProcessRunner',
        title:"IProcessRunner",
        description:""
    });

    y({
        url:'/api/Cake.Testing/FakeConsole',
        title:"FakeConsole",
        description:""
    });

    y({
        url:'/api/Cake.SqlPackage/SqlPackageDeployReportSettings',
        title:"SqlPackageDeployReportSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.InspectCode/InspectCodeRunner',
        title:"InspectCodeRunner",
        description:""
    });

    y({
        url:'/api/Cake.Storyteller/StorytellerFlag',
        title:"StorytellerFlag",
        description:""
    });

    y({
        url:'/api/Cake.AWS.ElasticLoadBalancing/LoadBalancingSettings',
        title:"LoadBalancingSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/IScriptConventions',
        title:"IScriptConventions",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/SyncSettings',
        title:"SyncSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/DbSqliteProvider',
        title:"DbSqliteProvider",
        description:""
    });

    y({
        url:'/api/MagicChunks.Helpers/JsonExtensions',
        title:"JsonExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseNotes/GitReleaseNotesAliases',
        title:"GitReleaseNotesAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseManager.Publish/GitReleaseManagerPublishSettings',
        title:"GitReleaseManagerPublishSettings",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Commands/VagrantDockerRunner',
        title:"VagrantDockerRunner",
        description:""
    });

    y({
        url:'/api/Cake.Sonar/SonarEndSettings',
        title:"SonarEndSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/SetAclResourceType',
        title:"SetAclResourceType",
        description:""
    });

    y({
        url:'/api/Cake.Scripting/BuildScriptHost',
        title:"BuildScriptHost",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformEnvListSettings',
        title:"TerraformEnvListSettings",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf.Migration/DotNetCoreEfMigrationRemover',
        title:"DotNetCoreEfMigrationRemover",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseManager.Close/GitReleaseManagerCloseMilestoneSettings',
        title:"GitReleaseManagerCloseMilestoneSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO.Arguments/SecretArgument',
        title:"SecretArgument",
        description:""
    });

    y({
        url:'/api/Cake.AWS.CodeDeploy/IDeployManager',
        title:"IDeployManager",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project.Properties/AssemblyInfoParser',
        title:"AssemblyInfoParser",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OpenCover/OpenCoverSettingsExtensions',
        title:"OpenCoverSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project/ProjectReference',
        title:"ProjectReference",
        description:""
    });

    y({
        url:'/api/Cake.Http/JsonEncoder',
        title:"JsonEncoder",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Jenkins/JenkinsProvider',
        title:"JenkinsProvider",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerNetworkDisconnectSettings',
        title:"DockerNetworkDisconnectSettings",
        description:""
    });

    y({
        url:'/api/Cake.HockeyApp/HockeyAppUploadResult',
        title:"HockeyAppUploadResult",
        description:""
    });

    y({
        url:'/api/Cake.Npm.Publish/NpmPublishAccess',
        title:"NpmPublishAccess",
        description:""
    });

    y({
        url:'/api/Cake.Codecov/CodecovAliases',
        title:"CodecovAliases",
        description:""
    });

    y({
        url:'/api/Cake.Watch/FileStatus',
        title:"FileStatus",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore/DotNetCoreAliases',
        title:"DotNetCoreAliases",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterDistributeGroupsCreateSettings',
        title:"MobileCenterDistributeGroupsCreateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting.Analysis/IScriptAnalyzer',
        title:"IScriptAnalyzer",
        description:""
    });

    y({
        url:'/api/Cake.MarkdownToPdf/Settings',
        title:"Settings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GoCD/GoCDInfo',
        title:"GoCDInfo",
        description:""
    });

    y({
        url:'/api/Cake.EntityFramework.Interfaces/IEfMigrator',
        title:"IEfMigrator",
        description:""
    });

    y({
        url:'/api/Cake.SqlTools/BaseSqlQueryRepository',
        title:"BaseSqlQueryRepository",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterCrashesUploadMissingSymbolsSettings',
        title:"MobileCenterCrashesUploadMissingSymbolsSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core/TaskSetupEventArgs',
        title:"TaskSetupEventArgs",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ReportGenerator/ReportGeneratorRunner',
        title:"ReportGeneratorRunner",
        description:""
    });

    y({
        url:'/api/Cake.Apigee.Contracts/ConfigurationVersion',
        title:"ConfigurationVersion",
        description:""
    });

    y({
        url:'/api/Cake.Http/PocoJsonSerializerStrategy',
        title:"PocoJsonSerializerStrategy",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools/DotNetBuildSettingsExtensions',
        title:"DotNetBuildSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.ActiveDirectory/ActiveDirectoryBase_1',
        title:"ActiveDirectoryBase<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Putty/GenericPlinkRunner_1',
        title:"GenericPlinkRunner<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild.Data/TFBuildTaskStatus',
        title:"TFBuildTaskStatus",
        description:""
    });

    y({
        url:'/api/Cake.Transifex/ITransifexRunnerCommands',
        title:"ITransifexRunnerCommands",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/DeployProxySettings',
        title:"DeployProxySettings",
        description:""
    });

    y({
        url:'/api/Cake.Bumpy/BumpySettings',
        title:"BumpySettings",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator.UnitTest/TestParsing',
        title:"TestParsing",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Cake/CakeRunner',
        title:"CakeRunner",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/RegValueProvider',
        title:"RegValueProvider",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterOrgsCollaboratorsUpdateSettings',
        title:"MobileCenterOrgsCollaboratorsUpdateSettings",
        description:""
    });

    y({
        url:'/api/Cake.MicrosoftTeams/MicrosoftTeamsMessagePotentialAction',
        title:"MicrosoftTeamsMessagePotentialAction",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NUnit/NUnitAliases',
        title:"NUnitAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.MSBuild/MSBuildArgumentBuilderExtensions',
        title:"MSBuildArgumentBuilderExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Newman.Reporters/JUnitReporterSettings',
        title:"JUnitReporterSettings",
        description:""
    });

    y({
        url:'/api/Cake.Issues/Issue_1',
        title:"Issue<T>",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OctopusDeploy/OctopusPackSettings',
        title:"OctopusPackSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DupFinder/DupFinderAliases',
        title:"DupFinderAliases",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf.Migration/DotNetCoreEfMigrationRemoveSettings',
        title:"DotNetCoreEfMigrationRemoveSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSTest/MSTestSettings',
        title:"MSTestSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OctopusDeploy/OctopusDeployReleaseDeployer',
        title:"OctopusDeployReleaseDeployer",
        description:""
    });

    y({
        url:'/api/Cake.Bumpy/BumpyAliases',
        title:"BumpyAliases",
        description:""
    });

    y({
        url:'/api/Cake.Issues/Issue',
        title:"Issue",
        description:""
    });

    y({
        url:'/api/Cake.Transifex/TransifexRunnerAliases',
        title:"TransifexRunnerAliases",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/AppPoolPipelineMode',
        title:"AppPoolPipelineMode",
        description:""
    });

    y({
        url:'/api/Cake.Gem.Push/GemPushSettings',
        title:"GemPushSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover.Merge/DotCoverMerger',
        title:"DotCoverMerger",
        description:""
    });

    y({
        url:'/api/Cake.OctoVariapus/OctoVariableImportAlias',
        title:"OctoVariableImportAlias",
        description:""
    });

    y({
        url:'/api/Cake.VersionReader/VersionReaderAliases',
        title:"VersionReaderAliases",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerRegistryLoginSettings',
        title:"DockerRegistryLoginSettings",
        description:""
    });

    y({
        url:'/api/Cake.CsvHelper/CsvHelpers',
        title:"CsvHelpers",
        description:""
    });

    y({
        url:'/api/Cake.Yarn/YarnRunner',
        title:"YarnRunner",
        description:""
    });

    y({
        url:'/api/Cake.AWS.ElasticLoadBalancing/CakeEnvironmentExtensions',
        title:"CakeEnvironmentExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bitrise.Data/BitriseRepositoryInfo',
        title:"BitriseRepositoryInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GoCD.Data/GoCDHistoryInfo',
        title:"GoCDHistoryInfo",
        description:""
    });

    y({
        url:'/api/Cake.Putty/PlinkTool_1',
        title:"PlinkTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.SqlTools/SqlQuerySettings',
        title:"SqlQuerySettings",
        description:""
    });

    y({
        url:'/api/Cake.Ftp/FtpSettings',
        title:"FtpSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.ElasticLoadBalancing/LoadBalancingManager',
        title:"LoadBalancingManager",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Push/ChocolateyPushSettings',
        title:"ChocolateyPushSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.XUnit/XUnitRunner',
        title:"XUnitRunner",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/ProcessSettings',
        title:"ProcessSettings",
        description:""
    });

    y({
        url:'/api/Cake.AutoRest/IGeneratorSettings',
        title:"IGeneratorSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Pack/ChocolateyPacker',
        title:"ChocolateyPacker",
        description:""
    });

    y({
        url:'/api/Cake.NSwag/NSwagAliases',
        title:"NSwagAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GoCD/IGoCDProvider',
        title:"IGoCDProvider",
        description:""
    });

    y({
        url:'/api/Cake.XCode/XCodeSettings',
        title:"XCodeSettings",
        description:""
    });

    y({
        url:'/api/Cake.Testing.Xunit/TestRuntime',
        title:"TestRuntime",
        description:""
    });

    y({
        url:'/api/Cake.Core.Diagnostics/LogAction',
        title:"LogAction",
        description:""
    });

    y({
        url:'/api/Cake.Scripty/ScriptyRunner',
        title:"ScriptyRunner",
        description:""
    });

    y({
        url:'/api/Cake.DocFx/DocFxBuildAliases',
        title:"DocFxBuildAliases",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterAnalyticsLogFlowSettings',
        title:"MobileCenterAnalyticsLogFlowSettings",
        description:""
    });

    y({
        url:'/api/Cake.KeePass/KeePassEntryCriteria',
        title:"KeePassEntryCriteria",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests.Tfs/TfsPullRequestSystemAliases',
        title:"TfsPullRequestSystemAliases",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf/ProcessArgumentBuilderExtensions',
        title:"ProcessArgumentBuilderExtensions",
        description:""
    });

    y({
        url:'/api/Cake.KeePass/KeePassAlias',
        title:"KeePassAlias",
        description:""
    });

    y({
        url:'/api/Cake.ActiveDirectory.Users/UserSettings',
        title:"UserSettings",
        description:""
    });

    y({
        url:'/api/Cake/CakeOptions',
        title:"CakeOptions",
        description:""
    });

    y({
        url:'/api/Cake.SqlServerPackager/GitFilesProvider',
        title:"GitFilesProvider",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/RecycleMode',
        title:"RecycleMode",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestRunManifestSettings',
        title:"MobileCenterTestRunManifestSettings",
        description:""
    });

    y({
        url:'/api/Cake.Tfx/TfxOutputType',
        title:"TfxOutputType",
        description:""
    });

    y({
        url:'/api/Cake.FluentMigrator/FluentMigratorAliases',
        title:"FluentMigratorAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.VSTest/DotNetCoreVSTestSettings',
        title:"DotNetCoreVSTestSettings",
        description:""
    });

    y({
        url:'/api/Cake.SendGrid/SendGridProvider',
        title:"SendGridProvider",
        description:""
    });

    y({
        url:'/api/Cake.Http/HttpClientAliases',
        title:"HttpClientAliases",
        description:""
    });

    y({
        url:'/api/Cake.Gem.Build/GemBuildSettings',
        title:"GemBuildSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Install/NuGetInstaller',
        title:"NuGetInstaller",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ILMerge/TargetKind',
        title:"TargetKind",
        description:""
    });

    y({
        url:'/api/Cake.Tfx/TfxArgumentBuilder',
        title:"TfxArgumentBuilder",
        description:""
    });

    y({
        url:'/api/Cake.Gulp/GulpRunnerSettings',
        title:"GulpRunnerSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/PackageProvider',
        title:"PackageProvider",
        description:""
    });

    y({
        url:'/api/Cake.SynVer/Magnitude',
        title:"Magnitude",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/CertProvider',
        title:"CertProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSBuild/MSBuildToolVersion',
        title:"MSBuildToolVersion",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/PackageSourceType',
        title:"PackageSourceType",
        description:""
    });

    y({
        url:'/api/Cake.SqlServer/LocalDbVersion',
        title:"LocalDbVersion",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseManager.AddAssets/GitReleaseManagerAddAssetsSettings',
        title:"GitReleaseManagerAddAssetsSettings",
        description:""
    });

    y({
        url:'/api/Cake.MicrosoftTeams/MicrosoftTeamsMessageFacts',
        title:"MicrosoftTeamsMessageFacts",
        description:""
    });

    y({
        url:'/api/Cake.AppPackager.Unpack/AppUnpacker',
        title:"AppUnpacker",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.SignTool/ISignToolResolver',
        title:"ISignToolResolver",
        description:""
    });

    y({
        url:'/api/Cake.Issues.MsBuild/LogFileFormat',
        title:"LogFileFormat",
        description:""
    });

    y({
        url:'/api/Cake.DocFx/DocFxLogLevel',
        title:"DocFxLogLevel",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterDistributeGroupsDownloadSettings',
        title:"MobileCenterDistributeGroupsDownloadSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bitrise.Data/BitriseWorkflowInfo',
        title:"BitriseWorkflowInfo",
        description:""
    });

    y({
        url:'/api/Cake.Azure/AzureResourceGroupAliases',
        title:"AzureResourceGroupAliases",
        description:""
    });

    y({
        url:'/api/Cake.Yarn/YarnAddSettings',
        title:"YarnAddSettings",
        description:""
    });

    y({
        url:'/api/Cake.NSwag.Settings/CSharpGeneratorSettings',
        title:"CSharpGeneratorSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ReportGenerator/ReportGeneratorAliases',
        title:"ReportGeneratorAliases",
        description:""
    });

    y({
        url:'/api/Cake.Issues/StringPathExtensions',
        title:"StringPathExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Tfx/TfxServerSettings',
        title:"TfxServerSettings",
        description:""
    });

    y({
        url:'/api/Cake.Issues/IssueCommentFormat',
        title:"IssueCommentFormat",
        description:""
    });

    y({
        url:'/api/Cake.Testing.Extensions/FakeLogExtensions',
        title:"FakeLogExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core/ICakeContext',
        title:"ICakeContext",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Tool/DotNetCoreToolRunner',
        title:"DotNetCoreToolRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Xml/XmlPokeAliases',
        title:"XmlPokeAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeTaskDependency',
        title:"CakeTaskDependency",
        description:""
    });

    y({
        url:'/api/Cake.Yarn/IYarnRunnerCommands',
        title:"IYarnRunnerCommands",
        description:""
    });

    y({
        url:'/api/Cake.DoInDirectory/DoInDirectoryAliases',
        title:"DoInDirectoryAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild/TFInfo',
        title:"TFInfo",
        description:""
    });

    y({
        url:'/api/Cake.Compression/CompressionAliases',
        title:"CompressionAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Security/SecurityAliases',
        title:"SecurityAliases",
        description:""
    });

    y({
        url:'/api/Cake.ActiveDirectory.Users/UserCreate',
        title:"UserCreate",
        description:""
    });

    y({
        url:'/api/Cake.Kudu.Provider/SCM',
        title:"SCM",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitLink/GitLinkSettings',
        title:"GitLinkSettings",
        description:""
    });

    y({
        url:'/api/Cake.FluentMigrator/FluentMigratorRunner',
        title:"FluentMigratorRunner",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/MachineConfig32Provider',
        title:"MachineConfig32Provider",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerImageSaveSettings',
        title:"DockerImageSaveSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.TextTransform/TextTransformSettings',
        title:"TextTransformSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NUnit/NUnit3Settings',
        title:"NUnit3Settings",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator.Extensions/StringExtensions',
        title:"StringExtensions",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/AutoToolSettings',
        title:"AutoToolSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core/ProcessRunnerExtensions',
        title:"ProcessRunnerExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild/TFBuildProvider',
        title:"TFBuildProvider",
        description:""
    });

    y({
        url:'/api/Cake.FileSet/FileSetSettings',
        title:"FileSetSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core/TaskSetupContext',
        title:"TaskSetupContext",
        description:""
    });

    y({
        url:'/api/Cake.Watch/WatchAlias',
        title:"WatchAlias",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover.Cover/DotCoverCoverer',
        title:"DotCoverCoverer",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests/Aliases',
        title:"Aliases",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/IScriptRunner',
        title:"IScriptRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Modules/CommonModule',
        title:"CommonModule",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantSnapshotRestoreSettings',
        title:"VagrantSnapshotRestoreSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterDistributeReleasesShowSettings',
        title:"MobileCenterDistributeReleasesShowSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/IFile',
        title:"IFile",
        description:""
    });

    y({
        url:'/api/Cake.VsCode/VscePackager',
        title:"VscePackager",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSWhere.Legacy/VSWhereLegacy',
        title:"VSWhereLegacy",
        description:""
    });

    y({
        url:'/api/Cake.Chutzpah/ChutzpahSettings',
        title:"ChutzpahSettings",
        description:""
    });

    y({
        url:'/api/Cake.Tfx/TfxAuthType',
        title:"TfxAuthType",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion/GenymotionAliases',
        title:"GenymotionAliases",
        description:""
    });

    y({
        url:'/api/Cake.HockeyApp/ReleaseType',
        title:"ReleaseType",
        description:""
    });

    y({
        url:'/api/Cake.Sonar/SonarCakeAliases',
        title:"SonarCakeAliases",
        description:""
    });

    y({
        url:'/api/Cake.AWS.ElasticLoadBalancing/ILoadBalancingManager',
        title:"ILoadBalancingManager",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterOrgsListSettings',
        title:"MobileCenterOrgsListSettings",
        description:""
    });

    y({
        url:'/api/Cake.OctoDeploy/OctoDeploySettings',
        title:"OctoDeploySettings",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf.Database/DotNetCoreEfDatabaseUpdateSettings',
        title:"DotNetCoreEfDatabaseUpdateSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.Route53/Route53Manager',
        title:"Route53Manager",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NUnit/NUnit3ProcessOption',
        title:"NUnit3ProcessOption",
        description:""
    });

    y({
        url:'/api/Cake.Paket.Addin.Restore/PaketRestoreSettings',
        title:"PaketRestoreSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bamboo.Data/BambooRepositoryInfo',
        title:"BambooRepositoryInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSBuild/MSBuildSettings',
        title:"MSBuildSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Pack/DotNetCorePacker',
        title:"DotNetCorePacker",
        description:""
    });

    y({
        url:'/api/Cake.Storyteller/StorytellerAliases',
        title:"StorytellerAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.InspectCode/SettingsLayer',
        title:"SettingsLayer",
        description:""
    });

    y({
        url:'/api/Cake.Issues/IBaseIssueComponent_1',
        title:"IBaseIssueComponent<T>",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterOrgsAppsListSettings',
        title:"MobileCenterOrgsAppsListSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSBuild/MSBuildFileLoggerOutput',
        title:"MSBuildFileLoggerOutput",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Pack/NuSpecContent',
        title:"NuSpecContent",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTokensDeleteSettings',
        title:"MobileCenterTokensDeleteSettings",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformShowRunner',
        title:"TerraformShowRunner",
        description:""
    });

    y({
        url:'/api/Cake.Core.Diagnostics/LogExtensions',
        title:"LogExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformAliases',
        title:"TerraformAliases",
        description:""
    });

    y({
        url:'/api/Cake.VsixSignTool/VsixSignToolAliases',
        title:"VsixSignToolAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OctopusDeploy/OctopusDeployAliases',
        title:"OctopusDeployAliases",
        description:""
    });

    y({
        url:'/api/Cake.Endpoint.Services/EndpointCreatorSettings',
        title:"EndpointCreatorSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Text/TextTransformation_1',
        title:"TextTransformation<TTemplate>",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator.Simulator/SimulatorSettings',
        title:"SimulatorSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OctopusDeploy/CreateReleaseSettings',
        title:"CreateReleaseSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterCrashesUploadSymbolsSettings',
        title:"MobileCenterCrashesUploadSymbolsSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.InnoSetup/InnoSetupQuietMode',
        title:"InnoSetupQuietMode",
        description:""
    });

    y({
        url:'/api/MagicChunks.Helpers/XmlExtensions',
        title:"XmlExtensions",
        description:""
    });

    y({
        url:'/api/Cake.AppVeyor/AppVeyorNuGetFeed',
        title:"AppVeyorNuGetFeed",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/WebServer60Provider',
        title:"WebServer60Provider",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterDistributeReleaseSettings',
        title:"MobileCenterDistributeReleaseSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.ElasticBeanstalk/ElasticBeanstalkAliases',
        title:"ElasticBeanstalkAliases",
        description:""
    });

    y({
        url:'/api/Cake.AppVeyor/AppVeyorProjectBuild',
        title:"AppVeyorProjectBuild",
        description:""
    });

    y({
        url:'/api/Cake.Wyam/WyamAliases',
        title:"WyamAliases",
        description:""
    });

    y({
        url:'/api/Cake.Npm/NpmTool_1',
        title:"NpmTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Xamarin/CommonProjectTypeGuids',
        title:"CommonProjectTypeGuids",
        description:""
    });

    y({
        url:'/api/Cake.NuGet/NuGetPackageInstaller',
        title:"NuGetPackageInstaller",
        description:""
    });

    y({
        url:'/api/Cake.Ftp.Services/IFtpService',
        title:"IFtpService",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OctopusDeploy/OctopusDeployReleaseDeploymentSettings',
        title:"OctopusDeployReleaseDeploymentSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild.Data/TFBuildRecordData',
        title:"TFBuildRecordData",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant/VagrantSettings',
        title:"VagrantSettings",
        description:""
    });

    y({
        url:'/api/Cake.Services/InstallSettings',
        title:"InstallSettings",
        description:""
    });

    y({
        url:'/api/Cake.Npm/NpmSettingsExtensions',
        title:"NpmSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.AppVeyor/AppVeyorProjectHistory',
        title:"AppVeyorProjectHistory",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bamboo.Data/BambooEnvironmentInfo',
        title:"BambooEnvironmentInfo",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestRunAppiumSettings',
        title:"MobileCenterTestRunAppiumSettings",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/PackageListState',
        title:"PackageListState",
        description:""
    });

    y({
        url:'/api/MagicChunks.MSBuild/TransformConfig',
        title:"TransformConfig",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerComposeDownSettings',
        title:"DockerComposeDownSettings",
        description:""
    });

    y({
        url:'/api/Cake.ActiveDirectory/ActiveDirectorySettings',
        title:"ActiveDirectorySettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TravisCI.Data/TravisCIJobInfo',
        title:"TravisCIJobInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSTest/VSTestAliases',
        title:"VSTestAliases",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformSettings',
        title:"TerraformSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/RecycleAppProvider',
        title:"RecycleAppProvider",
        description:""
    });

    y({
        url:'/api/Cake.AutoRest/AutoRestRunner',
        title:"AutoRestRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Restore/DotNetCoreRestoreSettings',
        title:"DotNetCoreRestoreSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterAnalyticsAudienceSettings',
        title:"MobileCenterAnalyticsAudienceSettings",
        description:""
    });

    y({
        url:'/api/Cake.HockeyApp.Internal/MultiPartFormDataContentExtensions',
        title:"MultiPartFormDataContentExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Coveralls/CoverallsIoRunner',
        title:"CoverallsIoRunner",
        description:""
    });

    y({
        url:'/api/Cake.VsMetrics/VsMetricsSettings',
        title:"VsMetricsSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSWhere/VSWhereTool_1',
        title:"VSWhereTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Gitter/GitterProvider',
        title:"GitterProvider",
        description:""
    });

    y({
        url:'/api/Cake.Path/PathTarget',
        title:"PathTarget",
        description:""
    });

    y({
        url:'/api/Cake.XdtTransform/XdtTransformation',
        title:"XdtTransformation",
        description:""
    });

    y({
        url:'/api/Cake.Yaml/YamlAliases',
        title:"YamlAliases",
        description:""
    });

    y({
        url:'/api/Cake.Transifex/TransifexMode',
        title:"TransifexMode",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.SetApiKey/NuGetSetApiKey',
        title:"NuGetSetApiKey",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NSIS/NSISAliases',
        title:"NSISAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GoCD.Data/GoCDMaterialRevisionsInfo',
        title:"GoCDMaterialRevisionsInfo",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/IProcessArgument',
        title:"IProcessArgument",
        description:""
    });

    y({
        url:'/api/Cake.Webpack/WebpackRunnerFactory',
        title:"WebpackRunnerFactory",
        description:""
    });

    y({
        url:'/api/Cake.Http/HttpSettingsExtensions',
        title:"HttpSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Putty/GenericPscpRunner_1',
        title:"GenericPscpRunner<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests/IPullRequestSystem',
        title:"IPullRequestSystem",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.WiX/WiXAliases',
        title:"WiXAliases",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/AppPoolEnable32BitProvider',
        title:"AppPoolEnable32BitProvider",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/AdbLogcatOutputVerbosity',
        title:"AdbLogcatOutputVerbosity",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitLink/GitLinkAliases',
        title:"GitLinkAliases",
        description:""
    });

    y({
        url:'/api/Cake.Endpoint/EndpointAliases',
        title:"EndpointAliases",
        description:""
    });

    y({
        url:'/api/Cake.Compression.Classes/GZip',
        title:"GZip",
        description:""
    });

    y({
        url:'/api/Cake.Git/GitChangeKind',
        title:"GitChangeKind",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Push/ChocolateyPusher',
        title:"ChocolateyPusher",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/CustomProjectFile',
        title:"CustomProjectFile",
        description:""
    });

    y({
        url:'/api/Cake.FileSet/FileSet',
        title:"FileSet",
        description:""
    });

    y({
        url:'/api/Cake.Curl/CurlAliases',
        title:"CurlAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.ContinuaCI/ContinuaCIMessageType',
        title:"ContinuaCIMessageType",
        description:""
    });

    y({
        url:'/api/Cake.Testing.Xunit/RuntimeFact',
        title:"RuntimeFact",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf.Database/DotNetCoreEfDatabaseDropSettings',
        title:"DotNetCoreEfDatabaseDropSettings",
        description:""
    });

    y({
        url:'/api/Cake.Curl/CurlUploadRunner',
        title:"CurlUploadRunner",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerComposeStopSettings',
        title:"DockerComposeStopSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestRunUitestSettings',
        title:"MobileCenterTestRunUitestSettings",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator/AppleSimulatorWindowScale',
        title:"AppleSimulatorWindowScale",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/DirectoryPath',
        title:"DirectoryPath",
        description:""
    });

    y({
        url:'/api/Cake.Kudu.Provider/Tools',
        title:"Tools",
        description:""
    });

    y({
        url:'/api/Cake.CMake/CMakeAliases',
        title:"CMakeAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Restore/DotNetCoreRestorer',
        title:"DotNetCoreRestorer",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/Globber',
        title:"Globber",
        description:""
    });

    y({
        url:'/api/Cake.ExtendedNuGet/PublishNuGetsSettings',
        title:"PublishNuGetsSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTelemetryOffSettings',
        title:"MobileCenterTelemetryOffSettings",
        description:""
    });

    y({
        url:'/api/Cake.Endpoint.Model/File',
        title:"File",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/AppHostAuthOverrideProvider',
        title:"AppHostAuthOverrideProvider",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion.Admin/GenymotionSimulatorNetworkMode',
        title:"GenymotionSimulatorNetworkMode",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/EnvironmentExtensions',
        title:"EnvironmentExtensions",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/GacAssemblyProvider',
        title:"GacAssemblyProvider",
        description:""
    });

    y({
        url:'/api/Cake.CMake/CMakeRunner',
        title:"CMakeRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.List/NuGetListSettings',
        title:"NuGetListSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/S3SettingsExtensions',
        title:"S3SettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.HockeyApp/NotifyOption',
        title:"NotifyOption",
        description:""
    });

    y({
        url:'/api/Cake.Common.Diagnostics/LoggingAliases',
        title:"LoggingAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/IScriptHost',
        title:"IScriptHost",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NUnit/NUnitProcessOption',
        title:"NUnitProcessOption",
        description:""
    });

    y({
        url:'/api/Cake.Services/ServiceManager',
        title:"ServiceManager",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild.Data/TFBuildMessageData',
        title:"TFBuildMessageData",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.WiX.Heat/WiXTemplateType',
        title:"WiXTemplateType",
        description:""
    });

    y({
        url:'/api/MagicChunks.Cake/MagicChunksAliases',
        title:"MagicChunksAliases",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAppManifest/AndoridAppManifestAliases',
        title:"AndoridAppManifestAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSWhere.All/VSWhereAllSettings',
        title:"VSWhereAllSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestPrepareXcuitestSettings',
        title:"MobileCenterTestPrepareXcuitestSettings",
        description:""
    });

    y({
        url:'/api/Cake.Testing/FakeProcess',
        title:"FakeProcess",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/OutputFormat',
        title:"OutputFormat",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerComposeKillSettings',
        title:"DockerComposeKillSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/RootWebConfig64Provider',
        title:"RootWebConfig64Provider",
        description:""
    });

    y({
        url:'/api/Cake.Newman.Reporters/JsonReporterSettings',
        title:"JsonReporterSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.CodeDeploy/CakeEnvironmentExtensions',
        title:"CakeEnvironmentExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting.Processors.Loading/LoadReference',
        title:"LoadReference",
        description:""
    });

    y({
        url:'/api/Cake.ReSharperReports/ReSharperReportsSettings',
        title:"ReSharperReportsSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ILMerge/TargetPlatform',
        title:"TargetPlatform",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Tool/DotNetCoreToolSettings',
        title:"DotNetCoreToolSettings",
        description:""
    });

    y({
        url:'/api/Cake.Paket.Addin.Push/PaketPushSettings',
        title:"PaketPushSettings",
        description:""
    });

    y({
        url:'/api/Cake.Npm.Rebuild/NpmRebuilSettingsExtensions',
        title:"NpmRebuilSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.MarkdownToPdf/PdfPageSize',
        title:"PdfPageSize",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution/SolutionFolder',
        title:"SolutionFolder",
        description:""
    });

    y({
        url:'/api/Cake.Xamarin/XamarinComponentUploadSettings',
        title:"XamarinComponentUploadSettings",
        description:""
    });

    y({
        url:'/api/Cake.Docker/ArgumentsBuilderExtension',
        title:"ArgumentsBuilderExtension",
        description:""
    });

    y({
        url:'/api/Cake.Gem/GemSettings',
        title:"GemSettings",
        description:""
    });

    y({
        url:'/api/Cake.Coveralls/CoverallsIoSettings',
        title:"CoverallsIoSettings",
        description:""
    });

    y({
        url:'/api/Cake.Ftp/Extensions',
        title:"Extensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OctopusDeploy/OctopusPushSettings',
        title:"OctopusPushSettings",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/Credentials',
        title:"Credentials",
        description:""
    });

    y({
        url:'/api/Cake.Core/ActionTask',
        title:"ActionTask",
        description:""
    });

    y({
        url:'/api/Cake.AWS.CloudFront/CakeEnvironmentExtensions',
        title:"CakeEnvironmentExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Apigee.Contracts/DeleteKeyValueMapResult',
        title:"DeleteKeyValueMapResult",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests/IPullRequestDiscussionComment',
        title:"IPullRequestDiscussionComment",
        description:""
    });

    y({
        url:'/api/Cake.KeePass/KeePassDatabaseSettings',
        title:"KeePassDatabaseSettings",
        description:""
    });

    y({
        url:'/api/Cake.Issues/BaseRuleUrlResolver_1',
        title:"BaseRuleUrlResolver<T>",
        description:""
    });

    y({
        url:'/api/Cake.CocoaPods/CocoaPodAliases',
        title:"CocoaPodAliases",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/MachineConfig64Provider',
        title:"MachineConfig64Provider",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/ModifiedCheck',
        title:"ModifiedCheck",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO.Arguments/TextArgument',
        title:"TextArgument",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSWhere.Product/VSWhereProduct',
        title:"VSWhereProduct",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseManager/GitReleaseManagerAliases',
        title:"GitReleaseManagerAliases",
        description:""
    });

    y({
        url:'/api/Cake.Testing/FakeFileExtensions',
        title:"FakeFileExtensions",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Parameters/IParameter',
        title:"IParameter",
        description:""
    });

    y({
        url:'/api/Cake.Npm.Rebuild/NpmRebuilder',
        title:"NpmRebuilder",
        description:""
    });

    y({
        url:'/api/Cake.AndroidSdkManager/AndroidSdkManagerProxyType',
        title:"AndroidSdkManagerProxyType",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/FileExtensions',
        title:"FileExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Issues.MsBuild/ILogFileFormat',
        title:"ILogFileFormat",
        description:""
    });

    y({
        url:'/api/Cake.CsvHelper/CsvHelperSettings',
        title:"CsvHelperSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.WiX/CandleSettings',
        title:"CandleSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.ContinuaCI.Data/ContinuaCIBuildInfo',
        title:"ContinuaCIBuildInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitVersion/GitVersionOutput',
        title:"GitVersionOutput",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterAppsShowSettings',
        title:"MobileCenterAppsShowSettings",
        description:""
    });

    y({
        url:'/api/Cake.AppPackager/AppPackagerAliases',
        title:"AppPackagerAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core/ICakeArguments',
        title:"ICakeArguments",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy/MsDeployRunner',
        title:"MsDeployRunner",
        description:""
    });

    y({
        url:'/api/Cake.AssemblyInfoReflector/AssemblyInfoReflectorAliases',
        title:"AssemblyInfoReflectorAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeContext',
        title:"CakeContext",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterDistributeGroupsListSettings',
        title:"MobileCenterDistributeGroupsListSettings",
        description:""
    });

    y({
        url:'/api/Cake.VsCode/IVsceToolResolver',
        title:"IVsceToolResolver",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Sources/NuGetSources',
        title:"NuGetSources",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GitLabCI/GitLabCIInfo',
        title:"GitLabCIInfo",
        description:""
    });

    y({
        url:'/api/Cake.Gulp/GulpRunnerFactory',
        title:"GulpRunnerFactory",
        description:""
    });

    y({
        url:'/api/Cake.Testing/FakeDirectoryExtensions',
        title:"FakeDirectoryExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NUnit/NUnit3Aliases',
        title:"NUnit3Aliases",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/CreateAppProvider',
        title:"CreateAppProvider",
        description:""
    });

    y({
        url:'/api/Cake.Git/GitDiffFile',
        title:"GitDiffFile",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitVersion/GitVersionSettings',
        title:"GitVersionSettings",
        description:""
    });

    y({
        url:'/api/Cake.Squirrel/SyncReleasesRunner',
        title:"SyncReleasesRunner",
        description:""
    });

    y({
        url:'/api/Cake.Putty/PlinkProtocol',
        title:"PlinkProtocol",
        description:""
    });

    y({
        url:'/api/Cake.NSwag.Sources/SwaggerSource',
        title:"SwaggerSource",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TravisCI.Data/TravisCIBuildInfo',
        title:"TravisCIBuildInfo",
        description:""
    });

    y({
        url:'/api/Cake.Core/ICakeTaskInfo',
        title:"ICakeTaskInfo",
        description:""
    });

    y({
        url:'/api/Cake.Yarn/YarnRunnerAliases',
        title:"YarnRunnerAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover.Report/DotCoverReportSettings',
        title:"DotCoverReportSettings",
        description:""
    });

    y({
        url:'/api/Cake.OctoDeploy/OctoDeployAlias',
        title:"OctoDeployAlias",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.InnoSetup/InnoSetupRunner',
        title:"InnoSetupRunner",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformShowSettings',
        title:"TerraformShowSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/AutoProvider',
        title:"AutoProvider",
        description:""
    });

    y({
        url:'/api/MagicChunks.Documents/JsonDocument',
        title:"JsonDocument",
        description:""
    });

    y({
        url:'/api/Cake.Testing/ToolFixtureExtensions',
        title:"ToolFixtureExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Figlet/FigletAliases',
        title:"FigletAliases",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion.License/GenymotionLicenseSettings',
        title:"GenymotionLicenseSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common/ReleaseNotesAliases',
        title:"ReleaseNotesAliases",
        description:""
    });

    y({
        url:'/api/Cake.Issues/IIssueProvider',
        title:"IIssueProvider",
        description:""
    });

    y({
        url:'/api/Cake.Ember.Serve/EmberServeSettings',
        title:"EmberServeSettings",
        description:""
    });

    y({
        url:'/api/Cake.Ember/EmberTool_1',
        title:"EmberTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterAnalyticsSessionsSettings',
        title:"MobileCenterAnalyticsSessionsSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.Route53/CakeContextExtensions',
        title:"CakeContextExtensions",
        description:""
    });

    y({
        url:'/api/Cake.HockeyApp/MandatoryOption',
        title:"MandatoryOption",
        description:""
    });

    y({
        url:'/api/Cake.AWS.Route53/CakeEnvironmentExtensions',
        title:"CakeEnvironmentExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ReportGenerator/ReportGeneratorSettings',
        title:"ReportGeneratorSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/IFileSystem',
        title:"IFileSystem",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Directives/SkipAction',
        title:"SkipAction",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Jenkins.Data/JenkinsNodeInfo',
        title:"JenkinsNodeInfo",
        description:""
    });

    y({
        url:'/api/Cake.KeePass/KeePassEntry',
        title:"KeePassEntry",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/AppHostSchemaProvider',
        title:"AppHostSchemaProvider",
        description:""
    });

    y({
        url:'/api/Cake.Core.Tooling/ToolResolutionStrategy',
        title:"ToolResolutionStrategy",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO.Arguments/QuotedArgument',
        title:"QuotedArgument",
        description:""
    });

    y({
        url:'/api/Cake.Testing/FakeFileSystem',
        title:"FakeFileSystem",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GitLabCI.Data/GitLabCIRunnerInfo',
        title:"GitLabCIRunnerInfo",
        description:""
    });

    y({
        url:'/api/Cake.Core.Text/TextTransformationTemplate',
        title:"TextTransformationTemplate",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantInitSettings',
        title:"VagrantInitSettings",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantBoxAddSettingsExtensions',
        title:"VagrantBoxAddSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion.Admin/GenymotionSimulator',
        title:"GenymotionSimulator",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/BackupManagerProvider',
        title:"BackupManagerProvider",
        description:""
    });

    y({
        url:'/api/Cake.EntityFramework.Models/Migration',
        title:"Migration",
        description:""
    });

    y({
        url:'/api/Cake.Core.Tooling/IToolRepository',
        title:"IToolRepository",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor/IAppVeyorProvider',
        title:"IAppVeyorProvider",
        description:""
    });

    y({
        url:'/api/Cake.VsCode/VsceToolResolver',
        title:"VsceToolResolver",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Pin/ChocolateyPinner',
        title:"ChocolateyPinner",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerContainerExecSettings',
        title:"DockerContainerExecSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project/ProjectAssemblyReference',
        title:"ProjectAssemblyReference",
        description:""
    });

    y({
        url:'/api/Cake.Issues.Markdownlint/MarkdownlintIssuesAliases',
        title:"MarkdownlintIssuesAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Add/NuGetAddSettings',
        title:"NuGetAddSettings",
        description:""
    });

    y({
        url:'/api/Cake.ActiveDirectory.Users/UserDisable',
        title:"UserDisable",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore/DotNetCoreTool_1',
        title:"DotNetCoreTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/RootWebConfig32Provider',
        title:"RootWebConfig32Provider",
        description:""
    });

    y({
        url:'/api/Cake.Issues/IssuesAliasConstants',
        title:"IssuesAliasConstants",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/BuildTarget',
        title:"BuildTarget",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAppManifest/AndroidAppManifest',
        title:"AndroidAppManifest",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover.Report/DotCoverReporter',
        title:"DotCoverReporter",
        description:""
    });

    y({
        url:'/api/Cake.EntityFramework.Models/EfMigrationException',
        title:"EfMigrationException",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/DirectoryPathCollection',
        title:"DirectoryPathCollection",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerNetworkCreateSettings',
        title:"DockerNetworkCreateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerNetworkRemoveSettings',
        title:"DockerNetworkRemoveSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Jenkins/IJenkinsProvider',
        title:"IJenkinsProvider",
        description:""
    });

    y({
        url:'/api/Cake.Squirrel/SyncReleasesSettings',
        title:"SyncReleasesSettings",
        description:""
    });

    y({
        url:'/api/Cake.Npm/NpmSettings',
        title:"NpmSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Parameters/BaseParameter',
        title:"BaseParameter",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project.Properties/AssemblyInfoAliases',
        title:"AssemblyInfoAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project/ProjectFile',
        title:"ProjectFile",
        description:""
    });

    y({
        url:'/api/Cake.Kudu.KuduSync/KuduSyncSettings',
        title:"KuduSyncSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/RegKeyProvider',
        title:"RegKeyProvider",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestPrepareUitestSettings',
        title:"MobileCenterTestPrepareUitestSettings",
        description:""
    });

    y({
        url:'/api/Cake.AppVeyor/AppVeyorProject',
        title:"AppVeyorProject",
        description:""
    });

    y({
        url:'/api/Cake.Json/JsonAliases',
        title:"JsonAliases",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestPrepareAppiumSettings',
        title:"MobileCenterTestPrepareAppiumSettings",
        description:""
    });

    y({
        url:'/api/Cake.SqlServerPackager/DiskFilesProvider',
        title:"DiskFilesProvider",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting.Analysis/IScriptAnalyzerContext',
        title:"IScriptAnalyzerContext",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Roundhouse/RoundhouseAliases',
        title:"RoundhouseAliases",
        description:""
    });

    y({
        url:'/api/Cake.EntityFramework.Models/ScriptResult',
        title:"ScriptResult",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/IS3Manager',
        title:"IS3Manager",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/IGlobber',
        title:"IGlobber",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.List/NuGetList',
        title:"NuGetList",
        description:""
    });

    y({
        url:'/api/Cake.Issues.EsLint/EsLintIssuesSettings',
        title:"EsLintIssuesSettings",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf.Migration/DotNetCoreEfMigrationAddSettings',
        title:"DotNetCoreEfMigrationAddSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.MSBuild/DotNetCoreMSBuildSettings',
        title:"DotNetCoreMSBuildSettings",
        description:""
    });

    y({
        url:'/api/Cake.Gitter.Chat/GitterChatMessageResult',
        title:"GitterChatMessageResult",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion.Admin/GenymotionCreateSettings',
        title:"GenymotionCreateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.Configuration/ICakeConfiguration',
        title:"ICakeConfiguration",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/MetaKeyProvider',
        title:"MetaKeyProvider",
        description:""
    });

    y({
        url:'/api/Cake.Apigee.Contracts/DeployProxyResult',
        title:"DeployProxyResult",
        description:""
    });

    y({
        url:'/api/Cake.Core.Utilities/Tool_1',
        title:"Tool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/ScriptRunner',
        title:"ScriptRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.MSBuild/MSBuildTreatAllWarningsAs',
        title:"MSBuildTreatAllWarningsAs",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OpenCover/OpenCoverSettings',
        title:"OpenCoverSettings",
        description:""
    });

    y({
        url:'/api/Cake.DocFx/DocFxSettings',
        title:"DocFxSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.Tooling/IToolLocator',
        title:"IToolLocator",
        description:""
    });

    y({
        url:'/api/Cake.SqlPackage/SqlPackageScriptSettings',
        title:"SqlPackageScriptSettings",
        description:""
    });

    y({
        url:'/api/Cake.Putty/PscpTool_1',
        title:"PscpTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Core/DefaultExecutionStrategy',
        title:"DefaultExecutionStrategy",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant/VagrantRunner',
        title:"VagrantRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor.Data/AppVeyorCommitInfo',
        title:"AppVeyorCommitInfo",
        description:""
    });

    y({
        url:'/api/Cake.Topshelf/TopshelfAliases',
        title:"TopshelfAliases",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/MicrosecondEpochConverter',
        title:"MicrosecondEpochConverter",
        description:""
    });

    y({
        url:'/api/Cake.Core/TypeExtensions',
        title:"TypeExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests.Tfs/ITfsCredentials',
        title:"ITfsCredentials",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterOrgsShowSettings',
        title:"MobileCenterOrgsShowSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.SetApiKey/NuGetSetApiKeySettings',
        title:"NuGetSetApiKeySettings",
        description:""
    });

    y({
        url:'/api/Cake.HockeyApp/HockeyAppAliases',
        title:"HockeyAppAliases",
        description:""
    });

    y({
        url:'/api/Cake.AWS.CloudFront/CloudFrontSettingsExtensions',
        title:"CloudFrontSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Tfx/ITfxArgumentBuilder',
        title:"ITfxArgumentBuilder",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project.Properties/AssemblyInfoCreator',
        title:"AssemblyInfoCreator",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/EnumerableExtensions',
        title:"EnumerableExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor.Data/AppVeyorPullRequestInfo',
        title:"AppVeyorPullRequestInfo",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/ScriptConventions',
        title:"ScriptConventions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.BitbucketPipelines.Data/BitbucketPipelinesEnvironmentInfo',
        title:"BitbucketPipelinesEnvironmentInfo",
        description:""
    });

    y({
        url:'/api/Cake.SqlPackage/SqlPackageSettings',
        title:"SqlPackageSettings",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion.Device/GenymotionDeviceSettings',
        title:"GenymotionDeviceSettings",
        description:""
    });

    y({
        url:'/api/Cake.ReSharperReports/ReSharperReportsAliases',
        title:"ReSharperReportsAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSBuild/MSBuildVersion',
        title:"MSBuildVersion",
        description:""
    });

    y({
        url:'/api/Cake.Storyteller/StorytellerException',
        title:"StorytellerException",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion.Config/GenymotionConfigSettings',
        title:"GenymotionConfigSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Upgrade/ChocolateyUpgradeSettings',
        title:"ChocolateyUpgradeSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/ContentPathAspNetCoreProvider',
        title:"ContentPathAspNetCoreProvider",
        description:""
    });

    y({
        url:'/api/Cake.Curl/CurlDownloadRunner',
        title:"CurlDownloadRunner",
        description:""
    });

    y({
        url:'/api/Cake.NSwag.Sources/GenerationSource',
        title:"GenerationSource",
        description:""
    });

    y({
        url:'/api/Cake.Endpoint.Model/Endpoint',
        title:"Endpoint",
        description:""
    });

    y({
        url:'/api/Cake.Testing.Fixtures/ToolFixtureProcessRunner_1',
        title:"ToolFixtureProcessRunner<TFixtureResult>",
        description:""
    });

    y({
        url:'/api/Cake.Newman.Reporters/HtmlReporterSettings',
        title:"HtmlReporterSettings",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests/PullRequestDiscussionComment',
        title:"PullRequestDiscussionComment",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Test/DotNetCoreTester',
        title:"DotNetCoreTester",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.BitbucketPipelines/BitbucketPipelinesProvider',
        title:"BitbucketPipelinesProvider",
        description:""
    });

    y({
        url:'/api/Cake.Git/GitResetMode',
        title:"GitResetMode",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseManager.Create/GitReleaseManagerCreateSettings',
        title:"GitReleaseManagerCreateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting.Analysis/ScriptAnalyzerError',
        title:"ScriptAnalyzerError",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Cake/CakeSettings',
        title:"CakeSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.SpecFlow/SpecFlowAliases',
        title:"SpecFlowAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild.Data/TFBuildArtifactType',
        title:"TFBuildArtifactType",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformEnvDeleteRunner',
        title:"TerraformEnvDeleteRunner",
        description:""
    });

    y({
        url:'/api/Cake.SendGrid/SendGridAliases',
        title:"SendGridAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSBuild/MSBuildPlatform',
        title:"MSBuildPlatform",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseManager/GitReleaseManagerTool_1',
        title:"GitReleaseManagerTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Common/ArgumentAliases',
        title:"ArgumentAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeReportEntry',
        title:"CakeReportEntry",
        description:""
    });

    y({
        url:'/api/Cake.Testing/FakeFile',
        title:"FakeFile",
        description:""
    });

    y({
        url:'/api/Cake.Testing/FakeConfiguration',
        title:"FakeConfiguration",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.MSBuild/MSBuildConsoleColorType',
        title:"MSBuildConsoleColorType",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/DotNetBuildSettingsExtensions',
        title:"DotNetBuildSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.SendGrid.Email/SendGridSettings',
        title:"SendGridSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build/BuildSystem',
        title:"BuildSystem",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/AmInstrumentOptions',
        title:"AmInstrumentOptions",
        description:""
    });

    y({
        url:'/api/Cake.Yarn/YarnRunnerSettings',
        title:"YarnRunnerSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterAliases',
        title:"MobileCenterAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseManager.Export/GitReleaseManagerExporter',
        title:"GitReleaseManagerExporter",
        description:""
    });

    y({
        url:'/api/Cake.Transifex/TransifexRunnerSettings',
        title:"TransifexRunnerSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.EC2/EC2Aliases',
        title:"EC2Aliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GoCD.Data/GoCDEnvironmentInfo',
        title:"GoCDEnvironmentInfo",
        description:""
    });

    y({
        url:'/api/ResxConverter.Core/IResxConverterOutput',
        title:"IResxConverterOutput",
        description:""
    });

    y({
        url:'/api/Cake.Hosts/CakeHostsAliases',
        title:"CakeHostsAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Execute/DotNetCoreExecutor',
        title:"DotNetCoreExecutor",
        description:""
    });

    y({
        url:'/api/Cake.VsixSignTool/VsixSignToolRunner_1',
        title:"VsixSignToolRunner<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Clean/DotNetCoreCleaner',
        title:"DotNetCoreCleaner",
        description:""
    });

    y({
        url:'/api/Cake.AWS.EC2/IEC2Manager',
        title:"IEC2Manager",
        description:""
    });

    y({
        url:'/api/Cake.Core/ICakePlatform',
        title:"ICakePlatform",
        description:""
    });

    y({
        url:'/api/Cake.Xamarin/XamarinComponentSubmitSettings',
        title:"XamarinComponentSubmitSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.New/ChocolateyScaffolder',
        title:"ChocolateyScaffolder",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Rules/ReplacementRule',
        title:"ReplacementRule",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/ProjectType',
        title:"ProjectType",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor/AppVeyorUploadArtifactType',
        title:"AppVeyorUploadArtifactType",
        description:""
    });

    y({
        url:'/api/Cake.ProjHelpers/ProjHelpers',
        title:"ProjHelpers",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.WiX.Heat/HeatSettings',
        title:"HeatSettings",
        description:""
    });

    y({
        url:'/api/Cake.Tfx/TfxTool_1',
        title:"TfxTool<TSettings>",
        description:""
    });

    y({
        url:'/api/ResxConverter.Core/ResxString',
        title:"ResxString",
        description:""
    });

    y({
        url:'/api/Cake.DocFx.Metadata/DocFxMetadataSettings',
        title:"DocFxMetadataSettings",
        description:""
    });

    y({
        url:'/api/Cake.AppPackager/AppPackagerSettings',
        title:"AppPackagerSettings",
        description:""
    });

    y({
        url:'/api/Cake.VsCode/VscePackageSettings',
        title:"VscePackageSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GitLabCI/GitLabCIProvider',
        title:"GitLabCIProvider",
        description:""
    });

    y({
        url:'/api/MagicChunks.Core/TransformationCollection',
        title:"TransformationCollection",
        description:""
    });

    y({
        url:'/api/Cake.NSwag.Settings/CSharpGeneratorSettingsExtensions',
        title:"CSharpGeneratorSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerComposeRestartSettings',
        title:"DockerComposeRestartSettings",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf.Migration/DotNetCoreEfMigrationScripter',
        title:"DotNetCoreEfMigrationScripter",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseManager.Close/GitReleaseManagerMilestoneCloser',
        title:"GitReleaseManagerMilestoneCloser",
        description:""
    });

    y({
        url:'/api/Cake.Issues.DocFx/DocFxIssuesSettings',
        title:"DocFxIssuesSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSBuild/PlatformTarget',
        title:"PlatformTarget",
        description:""
    });

    y({
        url:'/api/Cake.Gulp/GulpLocalRunner',
        title:"GulpLocalRunner",
        description:""
    });

    y({
        url:'/api/Cake.Core/ICakeRuntime',
        title:"ICakeRuntime",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TravisCI/TravisCIProvider',
        title:"TravisCIProvider",
        description:""
    });

    y({
        url:'/api/Cake.Core.Text/QuoteAwareStringSplitter',
        title:"QuoteAwareStringSplitter",
        description:""
    });

    y({
        url:'/api/Cake.WebDeploy/RemoteAgent',
        title:"RemoteAgent",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore/DotNetCoreSettings',
        title:"DotNetCoreSettings",
        description:""
    });

    y({
        url:'/api/Cake.Topshelf/TopshelfManager',
        title:"TopshelfManager",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/CustomProjectParserResult',
        title:"CustomProjectParserResult",
        description:""
    });

    y({
        url:'/api/Cake.Core.Text/ITextTransformationTemplate',
        title:"ITextTransformationTemplate",
        description:""
    });

    y({
        url:'/api/Cake.Core/ICakeEnvironment',
        title:"ICakeEnvironment",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerComposePullSettings',
        title:"DockerComposePullSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.ApiKey/ChocolateyApiKeySettings',
        title:"ChocolateyApiKeySettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterDistributeGroupsShowSettings',
        title:"MobileCenterDistributeGroupsShowSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.Route53/Route53Settings',
        title:"Route53Settings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor.Data/AppVeyorProjectInfo',
        title:"AppVeyorProjectInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.XUnit/XUnitAliases',
        title:"XUnitAliases",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/ProjectTypes',
        title:"ProjectTypes",
        description:""
    });

    y({
        url:'/api/Cake.Core.Configuration/CakeConfigurationProvider',
        title:"CakeConfigurationProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.MSBuild/MSBuildFileLoggerSettings',
        title:"MSBuildFileLoggerSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Install/ChocolateyInstaller',
        title:"ChocolateyInstaller",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.WiX/LightSettings',
        title:"LightSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Features/ChocolateyFeatureToggler',
        title:"ChocolateyFeatureToggler",
        description:""
    });

    y({
        url:'/api/Cake.Core/DirectoryExtensions',
        title:"DirectoryExtensions",
        description:""
    });

    y({
        url:'/api/Cake.AutoRest/AutoRestAliases',
        title:"AutoRestAliases",
        description:""
    });

    y({
        url:'/api/Cake.Kudu.Provider/Deployment',
        title:"Deployment",
        description:""
    });

    y({
        url:'/api/Cake.Common.Xml/XmlTransformation',
        title:"XmlTransformation",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild.Data/TFBuildAgentInfo',
        title:"TFBuildAgentInfo",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/DbDacFxProvider',
        title:"DbDacFxProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.MSBuild/DotNetCoreMSBuildSettingsExtensions',
        title:"DotNetCoreMSBuildSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bamboo/IBambooProvider',
        title:"IBambooProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSTest/MSTestRunner',
        title:"MSTestRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.XUnit/XUnit2Aliases',
        title:"XUnit2Aliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Fixie/FixieSettings',
        title:"FixieSettings",
        description:""
    });

    y({
        url:'/api/Cake.Newman.Reporters/NewmanSettingsExtensions',
        title:"NewmanSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Newman.Reporters/IReporterSettings',
        title:"IReporterSettings",
        description:""
    });

    y({
        url:'/api/Cake.ResxConverter/ResxConverterProvider',
        title:"ResxConverterProvider",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerComposeCreateSettings',
        title:"DockerComposeCreateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.IO/DeleteDirectorySettings',
        title:"DeleteDirectorySettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ILMerge/ILMergeAliases',
        title:"ILMergeAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild.Data/TFBuildRepositoryInfo',
        title:"TFBuildRepositoryInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Xml/XmlTransformationSettings',
        title:"XmlTransformationSettings",
        description:""
    });

    y({
        url:'/api/Cake.SqlPackage/SqlPackageExtractSettings',
        title:"SqlPackageExtractSettings",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerSwarmJoinSettings',
        title:"DockerSwarmJoinSettings",
        description:""
    });

    y({
        url:'/api/Cake.Squirrel/SquirrelAliases',
        title:"SquirrelAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeTaskExtensions',
        title:"CakeTaskExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/FileSystem',
        title:"FileSystem",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/ProcessRunner',
        title:"ProcessRunner",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterOrgsCreateSettings',
        title:"MobileCenterOrgsCreateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Apigee.Contracts/ApiProxy',
        title:"ApiProxy",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTool_1',
        title:"MobileCenterTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSWhere.Product/VSWhereProductSettings',
        title:"VSWhereProductSettings",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator/AppleSimulatorLaunchSettings',
        title:"AppleSimulatorLaunchSettings",
        description:""
    });

    y({
        url:'/api/Cake.ActiveDirectory/ActiveDirectoryAliases',
        title:"ActiveDirectoryAliases",
        description:""
    });

    y({
        url:'/api/Cake.AppPackager/ProcessBuilderExtensionsMethods',
        title:"ProcessBuilderExtensionsMethods",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseManager.AddAssets/GitReleaseManagerAssetsAdder',
        title:"GitReleaseManagerAssetsAdder",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/IEnvironmentSettings',
        title:"IEnvironmentSettings",
        description:""
    });

    y({
        url:'/api/Cake.Testing/FakeRuntime',
        title:"FakeRuntime",
        description:""
    });

    y({
        url:'/api/Cake.AWS.ElasticLoadBalancing/LoadBalancingSettingsExtensions',
        title:"LoadBalancingSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Apigee.Contracts/DeployEnvironment',
        title:"DeployEnvironment",
        description:""
    });

    y({
        url:'/api/Cake.Topshelf/ITopshelfManager',
        title:"ITopshelfManager",
        description:""
    });

    y({
        url:'/api/Cake.Core/SetupEventArgs',
        title:"SetupEventArgs",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/RuntimeOptions',
        title:"RuntimeOptions",
        description:""
    });

    y({
        url:'/api/Cake.Chutzpah/ChutzpahRunner',
        title:"ChutzpahRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Pack/NuGetPackSettings',
        title:"NuGetPackSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TravisCI/TravisCIInfo',
        title:"TravisCIInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitLink/GitLink3Runner',
        title:"GitLink3Runner",
        description:""
    });

    y({
        url:'/api/Cake.Npm.Publish/NpmPublishSettingsExtensions',
        title:"NpmPublishSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestGenerateUitestSettings',
        title:"MobileCenterTestGenerateUitestSettings",
        description:""
    });

    y({
        url:'/api/Cake.Npm.RunScript/NpmScriptRunner',
        title:"NpmScriptRunner",
        description:""
    });

    y({
        url:'/api/Cake.Yarn/YarnRunSettings',
        title:"YarnRunSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Push/NuGetPusher',
        title:"NuGetPusher",
        description:""
    });

    y({
        url:'/api/Cake.Testing.Fixtures/ToolFixtureResult',
        title:"ToolFixtureResult",
        description:""
    });

    y({
        url:'/api/Cake.SqlServer/DacAliases',
        title:"DacAliases",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion.Version/GenymotionVersionSettings',
        title:"GenymotionVersionSettings",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerContainerCreateSettings',
        title:"DockerContainerCreateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet/NuGetVerbosity',
        title:"NuGetVerbosity",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.New/ChocolateyNewSettings',
        title:"ChocolateyNewSettings",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformPlanSettings',
        title:"TerraformPlanSettings",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerSwarmUpdateSettings',
        title:"DockerSwarmUpdateSettings",
        description:""
    });

    y({
        url:'/api/Cake.EntityFramework.CakeTranslation/EfAliases',
        title:"EfAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Cake/CakeAliases',
        title:"CakeAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Publish/DotNetCorePublisher',
        title:"DotNetCorePublisher",
        description:""
    });

    y({
        url:'/api/Cake.MicrosoftTeams/MicrosoftTeamsAliases',
        title:"MicrosoftTeamsAliases",
        description:""
    });

    y({
        url:'/api/Cake.Issues/Aliases',
        title:"Aliases",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeException',
        title:"CakeException",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Jenkins/JenkinsInfo',
        title:"JenkinsInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ILRepack/ILRepackRunner',
        title:"ILRepackRunner",
        description:""
    });

    y({
        url:'/api/Cake.SonarScanner/SonarScannerSettings',
        title:"SonarScannerSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/AppPoolNetFxProvider',
        title:"AppPoolNetFxProvider",
        description:""
    });

    y({
        url:'/api/Cake.AndroidSdkManager/AndroidSdkDownloader',
        title:"AndroidSdkDownloader",
        description:""
    });

    y({
        url:'/api/Cake.Tfx.Extension.Share/TfxExtensionShareRunner',
        title:"TfxExtensionShareRunner",
        description:""
    });

    y({
        url:'/api/Cake.Npm.Install/NpmInstaller',
        title:"NpmInstaller",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterAnalyticsAppVersionsSettings',
        title:"MobileCenterAnalyticsAppVersionsSettings",
        description:""
    });

    y({
        url:'/api/MagicChunks/TransformTask',
        title:"TransformTask",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Jenkins.Data/JenkinsEnvironmentInfo',
        title:"JenkinsEnvironmentInfo",
        description:""
    });

    y({
        url:'/api/Cake.Core.Composition/ICakeModule',
        title:"ICakeModule",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GoCD.Data/GoCDPipelineHistoryInfo',
        title:"GoCDPipelineHistoryInfo",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator/AppleSimulatorDeviceType',
        title:"AppleSimulatorDeviceType",
        description:""
    });

    y({
        url:'/api/Cake.Issues/IssueProvider',
        title:"IssueProvider",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/GlobberExtensions',
        title:"GlobberExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Add/NuGetAdder',
        title:"NuGetAdder",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Jenkins.Data/JenkinsJobInfo',
        title:"JenkinsJobInfo",
        description:""
    });

    y({
        url:'/api/Cake.Npm/NpmPackAliases',
        title:"NpmPackAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor/AppVeyorProviderAddMessageExtensions',
        title:"AppVeyorProviderAddMessageExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bitrise.Data/BitriseProvisioningInfo',
        title:"BitriseProvisioningInfo",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests/PullRequestIssuesException',
        title:"PullRequestIssuesException",
        description:""
    });

    y({
        url:'/api/Cake.Git/GitCommit',
        title:"GitCommit",
        description:""
    });

    y({
        url:'/api/Cake.DocFx/DocFxMetadataAliases',
        title:"DocFxMetadataAliases",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformRunner_1',
        title:"TerraformRunner<TTerraformSettings>",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterBuildBranchesShowSettings',
        title:"MobileCenterBuildBranchesShowSettings",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/KeyValueMapEntry',
        title:"KeyValueMapEntry",
        description:""
    });

    y({
        url:'/api/Cake.AWS.EC2/CakeContextExtensions',
        title:"CakeContextExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Apigee.Contracts/ImportProxyResult',
        title:"ImportProxyResult",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor.Data/AppVeyorRepositoryInfo',
        title:"AppVeyorRepositoryInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Restore/NuGetRestorer',
        title:"NuGetRestorer",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/AdbLogcatBufferType',
        title:"AdbLogcatBufferType",
        description:""
    });

    y({
        url:'/api/Cake.DocFx/DocFxGlobalMetadata',
        title:"DocFxGlobalMetadata",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantBoxUpdateSettings',
        title:"VagrantBoxUpdateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core/TeardownContext',
        title:"TeardownContext",
        description:""
    });

    y({
        url:'/api/Cake.Npm.Pack/NpmPackSettingsExtensions',
        title:"NpmPackSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GoCD.Data/GoCDBuildCauseInfo',
        title:"GoCDBuildCauseInfo",
        description:""
    });

    y({
        url:'/api/MagicChunks.Documents/CustomObjectFactory',
        title:"CustomObjectFactory",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.InspectCode/InspectCodeSettings',
        title:"InspectCodeSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ReportUnit/ReportUnitSettings',
        title:"ReportUnitSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet/NuGetTool_1',
        title:"NuGetTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Core.Tooling/ToolSettings',
        title:"ToolSettings",
        description:""
    });

    y({
        url:'/api/Cake.Wyam/WyamRunner',
        title:"WyamRunner",
        description:""
    });

    y({
        url:'/api/Cake.Xamarin/VSToolSetupSettings',
        title:"VSToolSetupSettings",
        description:""
    });

    y({
        url:'/api/Cake.Codecov/CodecovSettings',
        title:"CodecovSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Security/FileHash',
        title:"FileHash",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeTask',
        title:"CakeTask",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build/BuildSystemAliases',
        title:"BuildSystemAliases",
        description:""
    });

    y({
        url:'/api/Cake.Compression.Classes/Zip',
        title:"Zip",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NSIS/MakeNSISSettings',
        title:"MakeNSISSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Net/HttpAliases',
        title:"HttpAliases",
        description:""
    });

    y({
        url:'/api/Cake.Putty/Protocol',
        title:"Protocol",
        description:""
    });

    y({
        url:'/api/Cake.NuGet/NuGetModule',
        title:"NuGetModule",
        description:""
    });

    y({
        url:'/api/Cake.Common.IO/ZipAliases',
        title:"ZipAliases",
        description:""
    });

    y({
        url:'/api/Cake.ActiveDirectory.Users/UserDelete',
        title:"UserDelete",
        description:""
    });

    y({
        url:'/api/Cake.Core/TeardownEventArgs',
        title:"TeardownEventArgs",
        description:""
    });

    y({
        url:'/api/Cake.Webpack/WebpackRunnerSettings',
        title:"WebpackRunnerSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GoCD/GoCDProvider',
        title:"GoCDProvider",
        description:""
    });

    y({
        url:'/api/Cake.Core.Composition/ICakeRegistrationBuilder',
        title:"ICakeRegistrationBuilder",
        description:""
    });

    y({
        url:'/api/Cake.Putty/SshVersion',
        title:"SshVersion",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf.Database/DotNetCoreEfDatabaseUpdater',
        title:"DotNetCoreEfDatabaseUpdater",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/FilePath',
        title:"FilePath",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerContainerRmSettings',
        title:"DockerContainerRmSettings",
        description:""
    });

    y({
        url:'/api/Cake.Git/GitMergeStatus',
        title:"GitMergeStatus",
        description:""
    });

    y({
        url:'/api/Cake.Testing.Xunit/WindowsTheory',
        title:"WindowsTheory",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantInitSettingsExtensions',
        title:"VagrantInitSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeTaskBuilderExtensions',
        title:"CakeTaskBuilderExtensions",
        description:""
    });

    y({
        url:'/api/MagicChunks.Documents/XmlDocument',
        title:"XmlDocument",
        description:""
    });

    y({
        url:'/api/Cake.SqlServer/ExtractDacpacSettings',
        title:"ExtractDacpacSettings",
        description:""
    });

    y({
        url:'/api/Cake.Gulp/GulpGlobalRunner',
        title:"GulpGlobalRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor/AppVeyorUploadArtifactsSettings',
        title:"AppVeyorUploadArtifactsSettings",
        description:""
    });

    y({
        url:'/api/MagicChunks.Core/Transformer',
        title:"Transformer",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Test/DotNetCoreTestSettings',
        title:"DotNetCoreTestSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Install/ChocolateyInstallSettings',
        title:"ChocolateyInstallSettings",
        description:""
    });

    y({
        url:'/api/Cake.AndroidSdkManager/AndroidSdkPackage',
        title:"AndroidSdkPackage",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerSwarmLeaveSettings',
        title:"DockerSwarmLeaveSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting.CodeGen/MethodAliasGenerator',
        title:"MethodAliasGenerator",
        description:""
    });

    y({
        url:'/api/Cake.MarkdownToPdf.Internal/PdfGenerator',
        title:"PdfGenerator",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf/DotNetCoreEfAliases',
        title:"DotNetCoreEfAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TeamCity.Data/TeamCityPullRequestInfo',
        title:"TeamCityPullRequestInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.SpecFlow/SpecFlowSettings',
        title:"SpecFlowSettings",
        description:""
    });

    y({
        url:'/api/Cake.Apigee.Contracts/ApiProxyMetadata',
        title:"ApiProxyMetadata",
        description:""
    });

    y({
        url:'/api/Cake.StrongNameTool/StrongNameResolver',
        title:"StrongNameResolver",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting.Analysis/IScriptInformation',
        title:"IScriptInformation",
        description:""
    });

    y({
        url:'/api/Cake.Putty/BoolParameterAttribute',
        title:"BoolParameterAttribute",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerImageRemoveSettings',
        title:"DockerImageRemoveSettings",
        description:""
    });

    y({
        url:'/api/Cake.Storyteller/StorytellerRunner',
        title:"StorytellerRunner",
        description:""
    });

    y({
        url:'/api/Cake.Core.Diagnostics/ICakeLog',
        title:"ICakeLog",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Fixie/FixieSettingsExtensions',
        title:"FixieSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ILMerge/ILMergeSettings',
        title:"ILMergeSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TeamCity.Data/TeamCityEnvironmentInfo',
        title:"TeamCityEnvironmentInfo",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator/AppleSimulatorPairedWatch',
        title:"AppleSimulatorPairedWatch",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/ApigeeAliases',
        title:"ApigeeAliases",
        description:""
    });

    y({
        url:'/api/Cake.AWS.ElasticLoadBalancing/LoadBalancingAliases',
        title:"LoadBalancingAliases",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantProvisionerSettingsExtensions',
        title:"VagrantProvisionerSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.XCode/XCodeAliases',
        title:"XCodeAliases",
        description:""
    });

    y({
        url:'/api/Cake.Sonar/SonarRunner',
        title:"SonarRunner",
        description:""
    });

    y({
        url:'/api/Cake.AppVeyor/AppVeyorEnvironmentDeployments',
        title:"AppVeyorEnvironmentDeployments",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.NuGet.Push/DotNetCoreNuGetPusher',
        title:"DotNetCoreNuGetPusher",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion/GenymotionAdminSettings',
        title:"GenymotionAdminSettings",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/CreateKeyValueMapSettings',
        title:"CreateKeyValueMapSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterBuildDownloadSettings',
        title:"MobileCenterBuildDownloadSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSTest/VSTestSettings',
        title:"VSTestSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core/PlatformFamily',
        title:"PlatformFamily",
        description:""
    });

    y({
        url:'/api/Cake.SonarScanner/SonarScannerAliases',
        title:"SonarScannerAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NSIS/MakeNSISRunner',
        title:"MakeNSISRunner",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests/PullRequestSystem',
        title:"PullRequestSystem",
        description:""
    });

    y({
        url:'/api/Cake.Core/ProcessSettingsExtensions',
        title:"ProcessSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OctopusDeploy/OctopusDeploySettings',
        title:"OctopusDeploySettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools/DotNetBuildAliases',
        title:"DotNetBuildAliases",
        description:""
    });

    y({
        url:'/api/Cake.Webpack/WebpackGlobalRunner',
        title:"WebpackGlobalRunner",
        description:""
    });

    y({
        url:'/api/MagicChunks.Documents/IgnoreCaseComparer',
        title:"IgnoreCaseComparer",
        description:""
    });

    y({
        url:'/api/Cake.AWS.CloudFront/CloudFrontSettings',
        title:"CloudFrontSettings",
        description:""
    });

    y({
        url:'/api/Cake.Git/GitRemote',
        title:"GitRemote",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GitLabCI.Data/GitLabCIProjectInfo',
        title:"GitLabCIProjectInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bitrise.Data/BitriseBuildInfo',
        title:"BitriseBuildInfo",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/FilePathExtensions',
        title:"FilePathExtensions",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterAppsSetCurrentSettings',
        title:"MobileCenterAppsSetCurrentSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.Tooling/Tool_1',
        title:"Tool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Arguments/IArgumentParser',
        title:"IArgumentParser",
        description:""
    });

    y({
        url:'/api/Cake.Core.Diagnostics/LogActionEntry',
        title:"LogActionEntry",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.SpecFlow.TestExecutionReport/SpecFlowTestExecutionReporter',
        title:"SpecFlowTestExecutionReporter",
        description:""
    });

    y({
        url:'/api/Cake.AppVeyor/AppVeyorBuild',
        title:"AppVeyorBuild",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/ScriptAliasFinder',
        title:"ScriptAliasFinder",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/UrlScanConfigProvider',
        title:"UrlScanConfigProvider",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/PackageReference',
        title:"PackageReference",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/IDirectory',
        title:"IDirectory",
        description:""
    });

    y({
        url:'/api/ResxConverter.Core/ResxConverter',
        title:"ResxConverter",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers/MsDeployProvider',
        title:"MsDeployProvider",
        description:""
    });

    y({
        url:'/api/Cake.VsMetrics/VsMetricsToolVersion',
        title:"VsMetricsToolVersion",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseManager.Create/GitReleaseManagerCreator',
        title:"GitReleaseManagerCreator",
        description:""
    });

    y({
        url:'/api/Cake.Ember.Build/EmberBuildRunner',
        title:"EmberBuildRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover/DotCoverAliases',
        title:"DotCoverAliases",
        description:""
    });

    y({
        url:'/api/Cake.NSwag.Settings/TypeScriptGeneratorSettings',
        title:"TypeScriptGeneratorSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution/SolutionProject',
        title:"SolutionProject",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestRunXcuitestSettings',
        title:"MobileCenterTestRunXcuitestSettings",
        description:""
    });

    y({
        url:'/api/Cake.Issues/BaseIssueComponent_1',
        title:"BaseIssueComponent<T>",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Uninstall/ChocolateyUninstaller',
        title:"ChocolateyUninstaller",
        description:""
    });

    y({
        url:'/api/Cake.Wyam/NuGetSettings',
        title:"NuGetSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSTest/MSTestAliases',
        title:"MSTestAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bamboo/BambooInfo',
        title:"BambooInfo",
        description:""
    });

    y({
        url:'/api/Cake.NSwag.Sources/AssemblySource',
        title:"AssemblySource",
        description:""
    });

    y({
        url:'/api/Cake.AndroidSdkManager/AndroidSdkManagerList',
        title:"AndroidSdkManagerList",
        description:""
    });

    y({
        url:'/api/Cake.Docker/GenericDockerComposeRunner_1',
        title:"GenericDockerComposeRunner<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.XCode/XCodeBuildSettings',
        title:"XCodeBuildSettings",
        description:""
    });

    y({
        url:'/api/Cake.AutoRest/CodeGenerator',
        title:"CodeGenerator",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/S3Aliases',
        title:"S3Aliases",
        description:""
    });

    y({
        url:'/api/Cake.NuGet/INuGetPackageInstaller',
        title:"INuGetPackageInstaller",
        description:""
    });

    y({
        url:'/api/Cake.SqlTools/MsSqlQueryRepository',
        title:"MsSqlQueryRepository",
        description:""
    });

    y({
        url:'/api/Cake.Yarn/YarnPackSettings',
        title:"YarnPackSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NUnit/NUnit3Runner',
        title:"NUnit3Runner",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/ContentPathLibProvider',
        title:"ContentPathLibProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover.Cover/DotCoverCoverSettings',
        title:"DotCoverCoverSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Security/HashAlgorithm',
        title:"HashAlgorithm",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Directives/SkipDirective',
        title:"SkipDirective",
        description:""
    });

    y({
        url:'/api/Cake.Npm/NpmLogLevel',
        title:"NpmLogLevel",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSBuild/MSBuildLogger',
        title:"MSBuildLogger",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformApplySettings',
        title:"TerraformApplySettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSWhere.Latest/VSWhereLatest',
        title:"VSWhereLatest",
        description:""
    });

    y({
        url:'/api/Cake.Tfx.Extension.Create/TfxExtensionCreateRunner',
        title:"TfxExtensionCreateRunner",
        description:""
    });

    y({
        url:'/api/Cake.Webpack/WebpackRunner_1',
        title:"WebpackRunner<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Ember.Build/EmberBuildSettings',
        title:"EmberBuildSettings",
        description:""
    });

    y({
        url:'/api/Cake.Email/EmailAliases',
        title:"EmailAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Run/DotNetCoreRunSettings',
        title:"DotNetCoreRunSettings",
        description:""
    });

    y({
        url:'/api/Cake.Yarn/YarnInstallSettings',
        title:"YarnInstallSettings",
        description:""
    });

    y({
        url:'/api/Cake.NSwag.Settings/SwaggerGeneratorSettings',
        title:"SwaggerGeneratorSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.XBuild/XBuildRunner',
        title:"XBuildRunner",
        description:""
    });

    y({
        url:'/api/Cake.GitPackager/Logger',
        title:"Logger",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseNotes/GitReleaseNotesIssueTracker',
        title:"GitReleaseNotesIssueTracker",
        description:""
    });

    y({
        url:'/api/Cake.Yarn/YarnRemoveSettings',
        title:"YarnRemoveSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover/DotCoverCoverageSettingsExtensions',
        title:"DotCoverCoverageSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO.NuGet/INuGetToolResolver',
        title:"INuGetToolResolver",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/AdbAliases',
        title:"AdbAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Uninstall/ChocolateyUninstallSettings',
        title:"ChocolateyUninstallSettings",
        description:""
    });

    y({
        url:'/api/Cake.Yarn/IYarnRunnerConfiguration',
        title:"IYarnRunnerConfiguration",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterProfileUpdateSettings',
        title:"MobileCenterProfileUpdateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TravisCI/ITravisCIProvider',
        title:"ITravisCIProvider",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator/AppleSimulatorConfigurationSettings',
        title:"AppleSimulatorConfigurationSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OctopusDeploy/OctopusPackFormat',
        title:"OctopusPackFormat",
        description:""
    });

    y({
        url:'/api/Cake.Topshelf/TopshelfSettings',
        title:"TopshelfSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Xml/XmlPeekSettings',
        title:"XmlPeekSettings",
        description:""
    });

    y({
        url:'/api/Cake.MarkdownToPdf/PdfSettings',
        title:"PdfSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/ScriptHost',
        title:"ScriptHost",
        description:""
    });

    y({
        url:'/api/Cake.FileHelpers/FileHelperAliases',
        title:"FileHelperAliases",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerComposeRmSettings',
        title:"DockerComposeRmSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/DirPathProvider',
        title:"DirPathProvider",
        description:""
    });

    y({
        url:'/api/Cake.Commands/ICommandFactory',
        title:"ICommandFactory",
        description:""
    });

    y({
        url:'/api/Cake.Commands/ICommand',
        title:"ICommand",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/CakeEnvironmentExtensions',
        title:"CakeEnvironmentExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ILRepack/ILRepackSettings',
        title:"ILRepackSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterAnalyticsEventsDeleteSettings',
        title:"MobileCenterAnalyticsEventsDeleteSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.XUnit/XUnit2Runner',
        title:"XUnit2Runner",
        description:""
    });

    y({
        url:'/api/Cake.Core.Tooling/ToolRepository',
        title:"ToolRepository",
        description:""
    });

    y({
        url:'/api/Cake.Ftp/FtpClient',
        title:"FtpClient",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Config/ChocolateyConfigSettings',
        title:"ChocolateyConfigSettings",
        description:""
    });

    y({
        url:'/api/Cake.Scripting/DryRunScriptHost',
        title:"DryRunScriptHost",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers/AuthenticationScheme',
        title:"AuthenticationScheme",
        description:""
    });

    y({
        url:'/api/Cake.Common.IO/DirectoryAliases',
        title:"DirectoryAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Clean/DotNetCoreCleanSettings',
        title:"DotNetCoreCleanSettings",
        description:""
    });

    y({
        url:'/api/Cake.VsixSignTool/VsixSignToolSignSettings',
        title:"VsixSignToolSignSettings",
        description:""
    });

    y({
        url:'/api/Cake.Testing/FakeLog',
        title:"FakeLog",
        description:""
    });

    y({
        url:'/api/Cake.Yarn/YarnCacheSettings',
        title:"YarnCacheSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.ContinuaCI/IContinuaCIProvider',
        title:"IContinuaCIProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild.Data/TFBuildTeamProjectInfo',
        title:"TFBuildTeamProjectInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild.Data/TFBuildTaskResult',
        title:"TFBuildTaskResult",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantSSHSettings',
        title:"VagrantSSHSettings",
        description:""
    });

    y({
        url:'/api/Cake.Issues.Testing/FakeIssueComponent',
        title:"FakeIssueComponent",
        description:""
    });

    y({
        url:'/api/Cake.Issues.Testing/ExceptionAssertExtensions',
        title:"ExceptionAssertExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Docker/EmptySettings',
        title:"EmptySettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild/TFBuildCommands',
        title:"TFBuildCommands",
        description:""
    });

    y({
        url:'/api/Cake.Apigee.Services/ApigeeProxyManagementService',
        title:"ApigeeProxyManagementService",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution/SolutionAliases',
        title:"SolutionAliases",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerImageBuildSettings',
        title:"DockerImageBuildSettings",
        description:""
    });

    y({
        url:'/api/ResxConverter.Core/ResxConverterOutputFactory',
        title:"ResxConverterOutputFactory",
        description:""
    });

    y({
        url:'/api/Cake.AWS.CloudFront/CloudFrontManager',
        title:"CloudFrontManager",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantSSHSettingsExtensions',
        title:"VagrantSSHSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution/SolutionParser',
        title:"SolutionParser",
        description:""
    });

    y({
        url:'/api/Cake.Issues.InspectCode/InspectCodeIssuesSettings',
        title:"InspectCodeIssuesSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.Tooling/ToolLocator',
        title:"ToolLocator",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/ProjectParserExtensions',
        title:"ProjectParserExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Roundhouse/RoundhouseRunner',
        title:"RoundhouseRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.IO/GlobbingAliases',
        title:"GlobbingAliases",
        description:""
    });

    y({
        url:'/api/Cake.Transifex/TransifexPullSettings',
        title:"TransifexPullSettings",
        description:""
    });

    y({
        url:'/api/ResxConverter.Mobile/StringExtensions',
        title:"StringExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Twitter/TwitterAliases',
        title:"TwitterAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Download/ChocolateyDownloader',
        title:"ChocolateyDownloader",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/IRegistryKey',
        title:"IRegistryKey",
        description:""
    });

    y({
        url:'/api/Cake.Git/GitCloneSettings',
        title:"GitCloneSettings",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf/DotNetCoreEfSettings',
        title:"DotNetCoreEfSettings",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests.Tfs/TfsPullRequestVote',
        title:"TfsPullRequestVote",
        description:""
    });

    y({
        url:'/api/Cake.Topshelf/TopshelfSettingsExtensions',
        title:"TopshelfSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/FilePathCollection',
        title:"FilePathCollection",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator/AppleSimulatorGraphicsQuality',
        title:"AppleSimulatorGraphicsQuality",
        description:""
    });

    y({
        url:'/api/Cake.Issues.InspectCode/InspectCodeIssuesAliases',
        title:"InspectCodeIssuesAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bitrise.Data/BitriseApplicationInfo',
        title:"BitriseApplicationInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project.Properties/AssemblyInfoCustomAttribute',
        title:"AssemblyInfoCustomAttribute",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestPrepareEspressoSettings',
        title:"MobileCenterTestPrepareEspressoSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Jenkins.Data/JenkinsRepositoryInfo',
        title:"JenkinsRepositoryInfo",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformEnvSelectRunner',
        title:"TerraformEnvSelectRunner",
        description:""
    });

    y({
        url:'/api/ResxConverter.Mobile/AndroidResxConverterOutput',
        title:"AndroidResxConverterOutput",
        description:""
    });

    y({
        url:'/api/Cake.Tfx.Extension.Create/TfxExtensionCreateSettings',
        title:"TfxExtensionCreateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Xamarin/TestCloudSettings',
        title:"TestCloudSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Xml/XmlPokeSettings',
        title:"XmlPokeSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSWhere.Latest/VSWhereLatestSettings',
        title:"VSWhereLatestSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet/NuGetAliases',
        title:"NuGetAliases",
        description:""
    });

    y({
        url:'/api/Cake.SendGrid/SendGridResult',
        title:"SendGridResult",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Pack/ChocolateyNuSpecContent',
        title:"ChocolateyNuSpecContent",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/AutoPropertyAttribute',
        title:"AutoPropertyAttribute",
        description:""
    });

    y({
        url:'/api/Cake.AppVeyor/AppVeyorProjectDeployment',
        title:"AppVeyorProjectDeployment",
        description:""
    });

    y({
        url:'/api/Cake.AppVeyor/AppVeyorJob',
        title:"AppVeyorJob",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore/DotNetCoreVerbosity',
        title:"DotNetCoreVerbosity",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/ScriptAliasType',
        title:"ScriptAliasType",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterDistributeGroupsDeleteSettings',
        title:"MobileCenterDistributeGroupsDeleteSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.CodeDeploy/DeployManager',
        title:"DeployManager",
        description:""
    });

    y({
        url:'/api/Cake.Xamarin/XamarinComponentCredentialSettings',
        title:"XamarinComponentCredentialSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common/ReleaseNotes',
        title:"ReleaseNotes",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeContextAdapter',
        title:"CakeContextAdapter",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/SpecialPath',
        title:"SpecialPath",
        description:""
    });

    y({
        url:'/api/Cake.Gitter.Chat/GitterChatProvider',
        title:"GitterChatProvider",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantPowerShellSettingsExtensions',
        title:"VagrantPowerShellSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core/IConsole',
        title:"IConsole",
        description:""
    });

    y({
        url:'/api/Cake.Watch/WatchSettings',
        title:"WatchSettings",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Commands/VagrantPluginRunner',
        title:"VagrantPluginRunner",
        description:""
    });

    y({
        url:'/api/Cake.AndroidSdkManager/AndroidSdkManagerToolSettings',
        title:"AndroidSdkManagerToolSettings",
        description:""
    });

    y({
        url:'/api/Cake.AppPackager.Bundle/AppBundler',
        title:"AppBundler",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/DacpacAction',
        title:"DacpacAction",
        description:""
    });

    y({
        url:'/api/Cake.Gem.Push/GemPushRunner',
        title:"GemPushRunner",
        description:""
    });

    y({
        url:'/api/Cake.VsixSignTool/ArgumentsBuilderExtension',
        title:"ArgumentsBuilderExtension",
        description:""
    });

    y({
        url:'/api/Cake.Yarn/YarnVersionSettings',
        title:"YarnVersionSettings",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Commands/VagrantSnapshotRunner',
        title:"VagrantSnapshotRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Init/NuGetIniter',
        title:"NuGetIniter",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Pack/DotNetCorePackSettings',
        title:"DotNetCorePackSettings",
        description:""
    });

    y({
        url:'/api/Cake.ReSharperReports/ReSharperReportsRunner',
        title:"ReSharperReportsRunner",
        description:""
    });

    y({
        url:'/api/Cake.MarkdownToPdf/MarkdownToPdfAliases',
        title:"MarkdownToPdfAliases",
        description:""
    });

    y({
        url:'/api/Cake.AppVeyor/AppVeyorProjectDeployments',
        title:"AppVeyorProjectDeployments",
        description:""
    });

    y({
        url:'/api/Cake.WinSCP/Logger',
        title:"Logger",
        description:""
    });

    y({
        url:'/api/Cake.Npm.Install/NpmInstallSettings',
        title:"NpmInstallSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.SignTool/SignToolSignAliases',
        title:"SignToolSignAliases",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Commands/VagrantBoxRunner',
        title:"VagrantBoxRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.NuGet.Delete/DotNetCoreNuGetDeleter',
        title:"DotNetCoreNuGetDeleter",
        description:""
    });

    y({
        url:'/api/Cake.AutoRest/AutoRestSettingsExtensions',
        title:"AutoRestSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bamboo.Data/BambooBuildInfo',
        title:"BambooBuildInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Fixie/FixieAliases',
        title:"FixieAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.WiX.Heat/WiXGenerateType',
        title:"WiXGenerateType",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitVersion/GitVersion',
        title:"GitVersion",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/SetAclProvider',
        title:"SetAclProvider",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerImageLoadSettings',
        title:"DockerImageLoadSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.ElasticLoadBalancing/CakeContextExtensions',
        title:"CakeContextExtensions",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterDistributeGroupsUpdateSettings',
        title:"MobileCenterDistributeGroupsUpdateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Gitter/GitterAliases',
        title:"GitterAliases",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests/PullRequestDiscussionStatus',
        title:"PullRequestDiscussionStatus",
        description:""
    });

    y({
        url:'/api/Cake.SqlServer/BackupAliases',
        title:"BackupAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover.Analyse/DotCoverAnalyseSettings',
        title:"DotCoverAnalyseSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.XBuild/XBuildSettingsExtensions',
        title:"XBuildSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.AWS.CodeDeploy/CodeDeployAliases',
        title:"CodeDeployAliases",
        description:""
    });

    y({
        url:'/api/Cake.SemVer/SemVerAliases',
        title:"SemVerAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bamboo.Data/BambooCustomBuildInfo',
        title:"BambooCustomBuildInfo",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterAppsListSettings',
        title:"MobileCenterAppsListSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TeamCity/TeamCityDisposableExtensions',
        title:"TeamCityDisposableExtensions",
        description:""
    });

    y({
        url:'/api/Cake.GitPackager/GitPackagerRunner',
        title:"GitPackagerRunner",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/BaseSettings',
        title:"BaseSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestPrepareCalabashSettings',
        title:"MobileCenterTestPrepareCalabashSettings",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests/PullRequestIssueResult',
        title:"PullRequestIssueResult",
        description:""
    });

    y({
        url:'/api/Cake.Services/InstallSettingsExtensions',
        title:"InstallSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey/IChocolateyToolResolver',
        title:"IChocolateyToolResolver",
        description:""
    });

    y({
        url:'/api/Cake.Newman/NewmanAliases',
        title:"NewmanAliases",
        description:""
    });

    y({
        url:'/api/Cake.Email/EmailProvider',
        title:"EmailProvider",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/DownloadSettings',
        title:"DownloadSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OctopusDeploy/OctopusDeployReleaseCreator',
        title:"OctopusDeployReleaseCreator",
        description:""
    });

    y({
        url:'/api/Cake.Transifex/TransifexPushSettings',
        title:"TransifexPushSettings",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformEnvDeleteSettings',
        title:"TerraformEnvDeleteSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.Diagnostics/Verbosity',
        title:"Verbosity",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Pin/ChocolateyPinSettings',
        title:"ChocolateyPinSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution/SolutionParserResult',
        title:"SolutionParserResult",
        description:""
    });

    y({
        url:'/api/Cake.NSwag.Sources/JsonSchemaSource',
        title:"JsonSchemaSource",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GitLabCI.Data/GitLabCIEnvironmentInfo',
        title:"GitLabCIEnvironmentInfo",
        description:""
    });

    y({
        url:'/api/Cake.Issues.MsBuild/MsBuildIssuesSettings',
        title:"MsBuildIssuesSettings",
        description:""
    });

    y({
        url:'/api/Cake.Squirrel/SquirrelRunner',
        title:"SquirrelRunner",
        description:""
    });

    y({
        url:'/api/Cake.Tfx.Extension.Publish/TfxExtensionPublishRunner',
        title:"TfxExtensionPublishRunner",
        description:""
    });

    y({
        url:'/api/Cake.Testing/FakeLogMessage',
        title:"FakeLogMessage",
        description:""
    });

    y({
        url:'/api/Cake.Core.Diagnostics/NullLog',
        title:"NullLog",
        description:""
    });

    y({
        url:'/api/Cake.Paket.Addin/PaketAliases',
        title:"PaketAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO.Arguments/SwitchArgument',
        title:"SwitchArgument",
        description:""
    });

    y({
        url:'/api/Cake.Gem/GemTool_1',
        title:"GemTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.XCode/ExportFormatType',
        title:"XCodeBuildSettings.ExportFormatType",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.List/NuGetListItem',
        title:"NuGetListItem",
        description:""
    });

    y({
        url:'/api/Cake.AWS.ElasticBeanstalk/ElasticBeanstalkSettings',
        title:"ElasticBeanstalkSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Pack/NuGetPacker',
        title:"NuGetPacker",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project.Properties/AssemblyInfoSettingsExtensions',
        title:"AssemblyInfoSettingsExtensions",
        description:""
    });

    y({
        url:'/api/MagicChunks.Core/IDocument',
        title:"IDocument",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf/DotNetCoreEfContextSettings',
        title:"DotNetCoreEfContextSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project.XmlDoc/XmlDocExampleCode',
        title:"XmlDocExampleCode",
        description:""
    });

    y({
        url:'/api/Cake.Core/ProcessArgumentListExtensions',
        title:"ProcessArgumentListExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Webpack/WebpackLocalRunnerSettings',
        title:"WebpackLocalRunnerSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSBuild/MSBuildAliases',
        title:"MSBuildAliases",
        description:""
    });

    y({
        url:'/api/Cake.JMeter/JMeterSettings',
        title:"JMeterSettings",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests.Tfs/TfsPullRequestSettings',
        title:"TfsPullRequestSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Pack/NuSpecDependency',
        title:"NuSpecDependency",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestGenerateAppiumSettings',
        title:"MobileCenterTestGenerateAppiumSettings",
        description:""
    });

    y({
        url:'/api/Cake.Putty/PlinkSettings',
        title:"PlinkSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/UploadSettings',
        title:"UploadSettings",
        description:""
    });

    y({
        url:'/api/Cake.AzureStorage/AzureStorageAlias',
        title:"AzureStorageAlias",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey/ChocolateyToolResolver',
        title:"ChocolateyToolResolver",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterAppsCreateSettings',
        title:"MobileCenterAppsCreateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Path/PathAliases',
        title:"PathAliases",
        description:""
    });

    y({
        url:'/api/Cake.Raygun/RaygunAliases',
        title:"RaygunAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.VSTest/DotNetCoreVSTester',
        title:"DotNetCoreVSTester",
        description:""
    });

    y({
        url:'/api/Cake.CsvHelper/CsvHelperAliases',
        title:"CsvHelperAliases",
        description:""
    });

    y({
        url:'/api/Cake.HockeyApp/DownloadStatus',
        title:"DownloadStatus",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.ContinuaCI.Data/ContinuaCIChangesetInfo',
        title:"ContinuaCIChangesetInfo",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantPluginInstallSettingsExtensions',
        title:"VagrantPluginInstallSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Testing/FakeFileSystemExtensions',
        title:"FakeFileSystemExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/IFileSystemInfo',
        title:"IFileSystemInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TeamCity/ITeamCityProvider',
        title:"ITeamCityProvider",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion.Admin/GenymotionEditSettings',
        title:"GenymotionEditSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild.Data/TFBuildEnvironmentInfo',
        title:"TFBuildEnvironmentInfo",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantPackageSettingsExtensions',
        title:"VagrantPackageSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Kudu.Provider/KuduProvider',
        title:"KuduProvider",
        description:""
    });

    y({
        url:'/api/Cake.AWS.ElasticBeanstalk/IElasticBeanstalkManager',
        title:"IElasticBeanstalkManager",
        description:""
    });

    y({
        url:'/api/Cake.ResxConverter/ResxConverterAliases',
        title:"ResxConverterAliases",
        description:""
    });

    y({
        url:'/api/Cake.Putty/PscpSettings',
        title:"PscpSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/DownloadSettingsExtensions',
        title:"DownloadSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ILMerge/TargetPlatformVersion',
        title:"TargetPlatformVersion",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NUnit/NUnitRunner',
        title:"NUnitRunner",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator/AppleSimulatorPair',
        title:"AppleSimulatorPair",
        description:""
    });

    y({
        url:'/api/Cake.Xamarin/MDToolSetupSettings',
        title:"MDToolSetupSettings",
        description:""
    });

    y({
        url:'/api/Cake.SqlServer/RestoreSqlBackupSettings',
        title:"RestoreSqlBackupSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover.Analyse/DotCoverAnalyser',
        title:"DotCoverAnalyser",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/GlobbingExtensions',
        title:"GlobbingExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Storyteller/StorytellerArgumentBuilder',
        title:"StorytellerArgumentBuilder",
        description:""
    });

    y({
        url:'/api/Cake.Transifex/TransifexStatusSettings',
        title:"TransifexStatusSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OctopusDeploy/OctopusDeployPusher',
        title:"OctopusDeployPusher",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.XBuild/XBuildAliases',
        title:"XBuildAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Text/TextTransformationAliases',
        title:"TextTransformationAliases",
        description:""
    });

    y({
        url:'/api/Cake.WebDeploy/DeploySettingsExtensions',
        title:"DeploySettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Sonar.Attributes/ArgumentAttribute',
        title:"ArgumentAttribute",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantPluginInstallSettings',
        title:"VagrantPluginInstallSettings",
        description:""
    });

    y({
        url:'/api/MagicChunks.Documents/YamlDocument',
        title:"YamlDocument",
        description:""
    });

    y({
        url:'/api/Cake.AWS.CodeDeploy/DeploySettings',
        title:"DeploySettings",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeRuntime',
        title:"CakeRuntime",
        description:""
    });

    y({
        url:'/api/Cake.Core/StringExtensions',
        title:"StringExtensions",
        description:""
    });

    y({
        url:'/api/Cake.MarkdownToPdf/Themes',
        title:"Themes",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/ProjectPath',
        title:"ProjectPath",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformApplyRunner',
        title:"TerraformApplyRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.SignTool/SignToolDigestAlgorithm',
        title:"SignToolDigestAlgorithm",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests/PullRequestDiscussionThread',
        title:"PullRequestDiscussionThread",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting.CodeGen/PropertyAliasGenerator',
        title:"PropertyAliasGenerator",
        description:""
    });

    y({
        url:'/api/Cake.ActiveDirectory.Users/UserFind',
        title:"UserFind",
        description:""
    });

    y({
        url:'/api/Cake.GitPackager/GitPackagerExtensions',
        title:"GitPackagerExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Compression.Classes/BZip2',
        title:"BZip2",
        description:""
    });

    y({
        url:'/api/Cake.SqlPackage/SqlPackageDriftReportSettings',
        title:"SqlPackageDriftReportSettings",
        description:""
    });

    y({
        url:'/api/Cake.Xamarin/XamarinAliases',
        title:"XamarinAliases",
        description:""
    });

    y({
        url:'/api/Cake.Issues.EsLint/LogFileFormat',
        title:"LogFileFormat",
        description:""
    });

    y({
        url:'/api/Cake.AppPackager.Encrypt/AppEncrypter',
        title:"AppEncrypter",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TeamCity/TeamCityInfo',
        title:"TeamCityInfo",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/ComObject64Provider',
        title:"ComObject64Provider",
        description:""
    });

    y({
        url:'/api/Cake.Yeoman/YeomanAliases',
        title:"YeomanAliases",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/RunCommandProvider',
        title:"RunCommandProvider",
        description:""
    });

    y({
        url:'/api/Cake.Raygun/RaygunSymbolSettings',
        title:"RaygunSymbolSettings",
        description:""
    });

    y({
        url:'/api/Cake.Coveralls/CoverallsNetRunner',
        title:"CoverallsNetRunner",
        description:""
    });

    y({
        url:'/api/Cake.OctoVariapus/OctoScope',
        title:"OctoScope",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.SetProxy/NuGetSetProxy',
        title:"NuGetSetProxy",
        description:""
    });

    y({
        url:'/api/Cake.Issues.Markdownlint/MarkdownlintIssuesSettings',
        title:"MarkdownlintIssuesSettings",
        description:""
    });

    y({
        url:'/api/Cake.StrongNameTool/StrongNameReSignToolAliases',
        title:"StrongNameReSignToolAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild.Data/TFRepositoryType',
        title:"TFRepositoryType",
        description:""
    });

    y({
        url:'/api/Cake.AppVeyor/AppVeyorEnvironmentDeployment',
        title:"AppVeyorEnvironmentDeployment",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey/ChocolateyTool_1',
        title:"ChocolateyTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.MyGet/IMyGetProvider',
        title:"IMyGetProvider",
        description:""
    });

    y({
        url:'/api/Cake.Putty/ParameterAttribute',
        title:"ParameterAttribute",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformEnvNewSettings',
        title:"TerraformEnvNewSettings",
        description:""
    });

    y({
        url:'/api/Cake.SqlServer/SqlServerAliases',
        title:"SqlServerAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover.Merge/DotCoverMergeSettings',
        title:"DotCoverMergeSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.CodeDeploy/CakeContextExtensions',
        title:"CakeContextExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.XBuild/XBuildSettings',
        title:"XBuildSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/WindowsRegistry',
        title:"WindowsRegistry",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/S3Settings',
        title:"S3Settings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bitrise.Data/BitriseDirectoryInfo',
        title:"BitriseDirectoryInfo",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/SolutionParserExtensions',
        title:"SolutionParserExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeReportPrinter',
        title:"CakeReportPrinter",
        description:""
    });

    y({
        url:'/api/Cake.FluentMigrator/FluentMigratorSettings',
        title:"FluentMigratorSettings",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/DeleteAllUndeployedApiProxyRevisionsSettings',
        title:"DeleteAllUndeployedApiProxyRevisionsSettings",
        description:""
    });

    y({
        url:'/api/Cake.AppPackager.Unbundle/AppUnbundler',
        title:"AppUnbundler",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting.Analysis/ScriptAnalyzerResult',
        title:"ScriptAnalyzerResult",
        description:""
    });

    y({
        url:'/api/Cake.AndroidSdkManager/AndroidSdkManagerAliases',
        title:"AndroidSdkManagerAliases",
        description:""
    });

    y({
        url:'/api/Cake.Xamarin/MDToolSettings',
        title:"MDToolSettings",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/DirectoryExtensions',
        title:"DirectoryExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core.Packaging/PackageType',
        title:"PackageType",
        description:""
    });

    y({
        url:'/api/Cake.Common.Xml/XmlDtdProcessing',
        title:"XmlDtdProcessing",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild/ITFBuildProvider',
        title:"ITFBuildProvider",
        description:""
    });

    y({
        url:'/api/Cake.VsixSignTool/AutoToolSettings',
        title:"AutoToolSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.MSBuild/MSBuildLoggerOutputLevel',
        title:"MSBuildLoggerOutputLevel",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/IScriptEngine',
        title:"IScriptEngine",
        description:""
    });

    y({
        url:'/api/Cake.WebDeploy/WebDeployManager',
        title:"WebDeployManager",
        description:""
    });

    y({
        url:'/api/Cake.Core.Modules/CoreModule',
        title:"CoreModule",
        description:""
    });

    y({
        url:'/api/Cake.XComponent.Exception/XComponentException',
        title:"XComponentException",
        description:""
    });

    y({
        url:'/api/Cake.Putty/AutoToolSettings',
        title:"AutoToolSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterSetupAutocompleteSettings',
        title:"MobileCenterSetupAutocompleteSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterBuildBranchesListSettings',
        title:"MobileCenterBuildBranchesListSettings",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/AmStartOptions',
        title:"AmStartOptions",
        description:""
    });

    y({
        url:'/api/Cake.Scripting/DescriptionScriptHost',
        title:"DescriptionScriptHost",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project.Properties/AssemblyInfoSettings',
        title:"AssemblyInfoSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ILMerge/ILMergeRunner',
        title:"ILMergeRunner",
        description:""
    });

    y({
        url:'/api/Cake.AppPackager.Decrypt/AppDecrypter',
        title:"AppDecrypter",
        description:""
    });

    y({
        url:'/api/Cake.Xamarin/XamarinComponentRestoreSettings',
        title:"XamarinComponentRestoreSettings",
        description:""
    });

    y({
        url:'/api/Cake.VsMetrics/VsMetricsRunner',
        title:"VsMetricsRunner",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/DbFullSqlProvider',
        title:"DbFullSqlProvider",
        description:""
    });

    y({
        url:'/api/Cake.HockeyApp/HockeyAppUploadSettings',
        title:"HockeyAppUploadSettings",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion/GenymotionSettings',
        title:"GenymotionSettings",
        description:""
    });

    y({
        url:'/api/Cake.SqlServer/PublishDacpacSettings',
        title:"PublishDacpacSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.Configuration/CakeConfiguration',
        title:"CakeConfiguration",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/CommandProvider',
        title:"CommandProvider",
        description:""
    });

    y({
        url:'/api/Cake.Issues/IIssue',
        title:"IIssue",
        description:""
    });

    y({
        url:'/api/Cake.SqlPackage/SqlPackageAction',
        title:"SqlPackageAction",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bitrise/BitriseInfo',
        title:"BitriseInfo",
        description:""
    });

    y({
        url:'/api/Cake.CocoaPods/CocoaPodInstallSettings',
        title:"CocoaPodInstallSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bamboo.Data/BambooPlanInfo',
        title:"BambooPlanInfo",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/GetApiProxySettings',
        title:"GetApiProxySettings",
        description:""
    });

    y({
        url:'/api/Cake.EntityFramework.Migrator/EfMigrator',
        title:"EfMigrator",
        description:""
    });

    y({
        url:'/api/Cake.VsCode/VsceTool_1',
        title:"VsceTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.VsixSignTool/ParameterAttribute',
        title:"ParameterAttribute",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project/ProjectParserResult',
        title:"ProjectParserResult",
        description:""
    });

    y({
        url:'/api/Cake.Core.Packaging/IPackageInstaller',
        title:"IPackageInstaller",
        description:""
    });

    y({
        url:'/api/Cake.Sonar/SonarBeginSettings',
        title:"SonarBeginSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/IRegistry',
        title:"IRegistry",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.SpecFlow.StepDefinitionReport/SpecFlowStepDefinitionReporter',
        title:"SpecFlowStepDefinitionReporter",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterLogoutSettings',
        title:"MobileCenterLogoutSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project.XmlDoc/XmlDocExampleCodeParser',
        title:"XmlDocExampleCodeParser",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/EmptySettings',
        title:"EmptySettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.Annotations/CakeModuleAttribute',
        title:"CakeModuleAttribute",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Pack/ChocolateyPackSettings',
        title:"ChocolateyPackSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ReportGenerator/ReportGeneratorReportType',
        title:"ReportGeneratorReportType",
        description:""
    });

    y({
        url:'/api/Cake.Tfx/TfxSettings',
        title:"TfxSettings",
        description:""
    });

    y({
        url:'/api/Cake.DocFx.Init/DocFxInitSettings',
        title:"DocFxInitSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.MSBuild/MSBuildLoggerSettings',
        title:"MSBuildLoggerSettings",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/LoggingExtensions',
        title:"LoggingExtensions",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTokensListSettings',
        title:"MobileCenterTokensListSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Init/NuGetInitSettings',
        title:"NuGetInitSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.EC2/EC2Settings',
        title:"EC2Settings",
        description:""
    });

    y({
        url:'/api/Cake.VsMetrics/VsMetricsAliases',
        title:"VsMetricsAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core.Annotations/CakePropertyAliasAttribute',
        title:"CakePropertyAliasAttribute",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NUnit/NUnit3Labels',
        title:"NUnit3Labels",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/AdbInstallLocation',
        title:"AdbInstallLocation",
        description:""
    });

    y({
        url:'/api/Cake.AssemblyInfoReflector/AssemblyInfoReflector',
        title:"AssemblyInfoReflector",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DupFinder/DupFinderRunner',
        title:"DupFinderRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor.Data/AppVeyorTagInfo',
        title:"AppVeyorTagInfo",
        description:""
    });

    y({
        url:'/api/Cake.WebDeploy/WebDeployAliases',
        title:"WebDeployAliases",
        description:""
    });

    y({
        url:'/api/Cake.SqlServerPackager/IFilesProvider',
        title:"IFilesProvider",
        description:""
    });

    y({
        url:'/api/ResxConverter.Mobile/ResxConverters',
        title:"ResxConverters",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers/Direction',
        title:"Direction",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bamboo/BambooProvider',
        title:"BambooProvider",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterLoginSettings',
        title:"MobileCenterLoginSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bitrise/IBitriseProvider',
        title:"IBitriseProvider",
        description:""
    });

    y({
        url:'/api/Cake.Chutzpah/ChutzpahBrowser',
        title:"ChutzpahBrowser",
        description:""
    });

    y({
        url:'/api/Cake.Sonar/SonarSettings',
        title:"SonarSettings",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/DeleteKeyValueMapSettings',
        title:"DeleteKeyValueMapSettings",
        description:""
    });

    y({
        url:'/api/Cake.CodeAnalysisReporting/CodeAnalysisReport',
        title:"CodeAnalysisReport",
        description:""
    });

    y({
        url:'/api/Cake.Common.Text/TextTransformationExtensions',
        title:"TextTransformationExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Docker/AutoToolSettings',
        title:"AutoToolSettings",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantSnapshotRestoreSettingsExtensions',
        title:"VagrantSnapshotRestoreSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/AdbPermissionInfo',
        title:"AdbPermissionInfo",
        description:""
    });

    y({
        url:'/api/Cake.Npm.Publish/NpmPublishSettings',
        title:"NpmPublishSettings",
        description:""
    });

    y({
        url:'/api/Cake.Gem/GemAliases',
        title:"GemAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.IO.Paths/ConvertableFilePath',
        title:"ConvertableFilePath",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator.XCRun/XCRunSettings',
        title:"XCRunSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Upgrade/ChocolateyUpgrader',
        title:"ChocolateyUpgrader",
        description:""
    });

    y({
        url:'/api/Cake.Azure/AzureLoginAliases',
        title:"AzureLoginAliases",
        description:""
    });

    y({
        url:'/api/Cake.WebDeploy/SkipRule',
        title:"SkipRule",
        description:""
    });

    y({
        url:'/api/Cake.Coveralls/CoverallsNetReportType',
        title:"CoverallsNetReportType",
        description:""
    });

    y({
        url:'/api/Cake.Chutzpah/ChutzpahAliases',
        title:"ChutzpahAliases",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/ActivityManagerAliases',
        title:"ActivityManagerAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Restore/NuGetRestoreSettings',
        title:"NuGetRestoreSettings",
        description:""
    });

    y({
        url:'/api/Cake.Newman/NewmanSettings',
        title:"NewmanSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/PathComparer',
        title:"PathComparer",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy/MsDeploySettings',
        title:"MsDeploySettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterOrgsUpdateSettings',
        title:"MobileCenterOrgsUpdateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Services/ServiceAliases',
        title:"ServiceAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/ScriptAlias',
        title:"ScriptAlias",
        description:""
    });

    y({
        url:'/api/Cake.AWS.EC2/EC2Manager',
        title:"EC2Manager",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/FileSystemExtensions',
        title:"FileSystemExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeEngine',
        title:"CakeEngine",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/S3Manager',
        title:"S3Manager",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformPlanRunner',
        title:"TerraformPlanRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.BitbucketPipelines.Data/BitbucketPipelinesRepositoryInfo',
        title:"BitbucketPipelinesRepositoryInfo",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy/Operation',
        title:"Operation",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Build/DotNetCoreBuilder',
        title:"DotNetCoreBuilder",
        description:""
    });

    y({
        url:'/api/Cake.Paket.Addin.Pack/PaketPackSettings',
        title:"PaketPackSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSTest/VSTestPlatform',
        title:"VSTestPlatform",
        description:""
    });

    y({
        url:'/api/Cake.Npm/NpmRebuildAliases',
        title:"NpmRebuildAliases",
        description:""
    });

    y({
        url:'/api/Cake.ExtendedNuGet/ExtendedNuGetAliases',
        title:"ExtendedNuGetAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TeamCity.Data/TeamCityProjectInfo',
        title:"TeamCityProjectInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.SetProxy/NuGetSetProxySettings',
        title:"NuGetSetProxySettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.WiX.Heat/HeatRunner',
        title:"HeatRunner",
        description:""
    });

    y({
        url:'/api/Cake.Git/GitMergeResult',
        title:"GitMergeResult",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/ProjectPathExtensions',
        title:"ProjectPathExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core.Reflection/IAssemblyLoader',
        title:"IAssemblyLoader",
        description:""
    });

    y({
        url:'/api/Cake.AppPackager/IAppPackagerResolver',
        title:"IAppPackagerResolver",
        description:""
    });

    y({
        url:'/api/Cake.Apigee.Contracts/NodePackagedModuleMetadata',
        title:"NodePackagedModuleMetadata",
        description:""
    });

    y({
        url:'/api/Cake.Core.Annotations/CakeAliasCategoryAttribute',
        title:"CakeAliasCategoryAttribute",
        description:""
    });

    y({
        url:'/api/Cake.WebDeploy/IWebDeployManager',
        title:"IWebDeployManager",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/BackupSettingsProvider',
        title:"BackupSettingsProvider",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformInitSettings',
        title:"TerraformInitSettings",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantPowerShellSettings',
        title:"VagrantPowerShellSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TravisCI.Data/TravisCIRepositoryInfo',
        title:"TravisCIRepositoryInfo",
        description:""
    });

    y({
        url:'/api/Cake.Testing/FakePlatform',
        title:"FakePlatform",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakePlatform',
        title:"CakePlatform",
        description:""
    });

    y({
        url:'/api/Cake.Http/CakeHttpClientHandler',
        title:"CakeHttpClientHandler",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/AppPoolConfigProvider',
        title:"AppPoolConfigProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GitLabCI/IGitLabCIProvider',
        title:"IGitLabCIProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OpenCover/OpenCoverLogLevel',
        title:"OpenCoverLogLevel",
        description:""
    });

    y({
        url:'/api/Cake.Http/HttpSettings',
        title:"HttpSettings",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion.Admin/GenymotionSimulatorDetails',
        title:"GenymotionSimulatorDetails",
        description:""
    });

    y({
        url:'/api/Cake.AWS.Route53/Route53SettingsExtensions',
        title:"Route53SettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Features/ChocolateyFeatureSettings',
        title:"ChocolateyFeatureSettings",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/BuildTargetExecutable',
        title:"BuildTargetExecutable",
        description:""
    });

    y({
        url:'/api/Cake.Core/TaskTeardownContext',
        title:"TaskTeardownContext",
        description:""
    });

    y({
        url:'/api/Cake.Core.Composition/ICakeContainerRegistrar',
        title:"ICakeContainerRegistrar",
        description:""
    });

    y({
        url:'/api/Cake.CakeMail/CakeMailProvider',
        title:"CakeMailProvider",
        description:""
    });

    y({
        url:'/api/Cake.Issues.DocFx/DocFxIssuesAliases',
        title:"DocFxIssuesAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseManager.Export/GitReleaseManagerExportSettings',
        title:"GitReleaseManagerExportSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ReportUnit/ReportUnitAliases',
        title:"ReportUnitAliases",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/ArgumentsBuilderExtension',
        title:"ArgumentsBuilderExtension",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/AppPoolPipelineProvider',
        title:"AppPoolPipelineProvider",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterOrgsCollaboratorsListSettings',
        title:"MobileCenterOrgsCollaboratorsListSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DupFinder/DupFinderSettings',
        title:"DupFinderSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterDistributeReleasesDeleteSettings',
        title:"MobileCenterDistributeReleasesDeleteSettings",
        description:""
    });

    y({
        url:'/api/Cake.Newman.Reporters/CLIReporterSettings',
        title:"CLIReporterSettings",
        description:""
    });

    y({
        url:'/api/Cake.AutoRest/AutoRestSettings',
        title:"AutoRestSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Sources/NuGetSourcesSettings',
        title:"NuGetSourcesSettings",
        description:""
    });

    y({
        url:'/api/Cake.Git/GitDescribeStrategy',
        title:"GitDescribeStrategy",
        description:""
    });

    y({
        url:'/api/Cake.Common.IO/Zipper',
        title:"Zipper",
        description:""
    });

    y({
        url:'/api/Cake.Webpack/NodeToolRunner_1',
        title:"NodeToolRunner<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO.NuGet/NuGetToolResolver',
        title:"NuGetToolResolver",
        description:""
    });

    y({
        url:'/api/Cake.Yeoman/YeomanRunnerSettings',
        title:"YeomanRunnerSettings",
        description:""
    });

    y({
        url:'/api/Cake.Gem/GemArgumentBuilder_1',
        title:"GemArgumentBuilder<T>",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/IisAppProvider',
        title:"IisAppProvider",
        description:""
    });

    y({
        url:'/api/Cake.Webpack/WebpackLocalRunner',
        title:"WebpackLocalRunner",
        description:""
    });

    y({
        url:'/api/Cake.SqlTools/NpgsqlQueryRepository',
        title:"NpgsqlQueryRepository",
        description:""
    });

    y({
        url:'/api/Cake.KeePass/KeePassReader',
        title:"KeePassReader",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OpenCover/OpenCoverAliases',
        title:"OpenCoverAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.WiX/LightRunner',
        title:"LightRunner",
        description:""
    });

    y({
        url:'/api/Cake.Tfx.Extension/ICreatePublishSettings',
        title:"ICreatePublishSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.XBuild/XBuildToolVersion',
        title:"XBuildToolVersion",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests/IPullRequestDiscussionThread',
        title:"IPullRequestDiscussionThread",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeConsole',
        title:"CakeConsole",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.ContinuaCI.Data/ContinuaCIProjectInfo',
        title:"ContinuaCIProjectInfo",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests/ReportIssuesToPullRequestSettings',
        title:"ReportIssuesToPullRequestSettings",
        description:""
    });

    y({
        url:'/api/Cake.Xamarin/VSToolSetupRunner',
        title:"VSToolSetupRunner",
        description:""
    });

    y({
        url:'/api/Cake.Scripty/ScriptyAliases',
        title:"ScriptyAliases",
        description:""
    });

    y({
        url:'/api/Cake.Plist/PlistAliases',
        title:"PlistAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NUnit/NUnit3AppDomainUsage',
        title:"NUnit3AppDomainUsage",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.BitbucketPipelines/IBitbucketPipelinesProvider',
        title:"IBitbucketPipelinesProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.Xml/XmlTransformationAlias',
        title:"XmlTransformationAlias",
        description:""
    });

    y({
        url:'/api/Cake.SqlPackage/SqlPackageImportSettings',
        title:"SqlPackageImportSettings",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantBoxRemoveSettingsExtensions',
        title:"VagrantBoxRemoveSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.MicrosoftTeams/MicrosoftTeamsMessageSection',
        title:"MicrosoftTeamsMessageSection",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSBuild/MSBuildBinaryLogSettings',
        title:"MSBuildBinaryLogSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.CloudFront/CakeContextExtensions',
        title:"CakeContextExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core/ITeardownContext',
        title:"ITeardownContext",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterBuildQueueSettings',
        title:"MobileCenterBuildQueueSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSTest/VSTestSettingsExtensions',
        title:"VSTestSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformEnvNewRunner',
        title:"TerraformEnvNewRunner",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterProfileListSettings',
        title:"MobileCenterProfileListSettings",
        description:""
    });

    y({
        url:'/api/Cake.Coveralls/CoverallsNetSettings',
        title:"CoverallsNetSettings",
        description:""
    });

    y({
        url:'/api/Cake.Tfx/TfxAliases',
        title:"TfxAliases",
        description:""
    });

    y({
        url:'/api/Cake.Storyteller/StorytellerSettings',
        title:"StorytellerSettings",
        description:""
    });

    y({
        url:'/api/Cake.Testing.Fixtures/ToolFixture_2',
        title:"ToolFixture<TToolSettings, TFixtureResult>",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestRunCalabashSettings',
        title:"MobileCenterTestRunCalabashSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTelemetryOnSettings',
        title:"MobileCenterTelemetryOnSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/UploadSettingsExtensions',
        title:"UploadSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Git/GitAliases',
        title:"GitAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/IScriptSession',
        title:"IScriptSession",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseNotes/GitReleaseNotesSettings',
        title:"GitReleaseNotesSettings",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformEnvSelectSettings',
        title:"TerraformEnvSelectSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.InspectCode/InspectCodeAliases',
        title:"InspectCodeAliases",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerImagePushSettings',
        title:"DockerImagePushSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Sources/ChocolateySourcesSettings',
        title:"ChocolateySourcesSettings",
        description:""
    });

    y({
        url:'/api/Cake.Docker/GenericDockerRunner_1',
        title:"GenericDockerRunner<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.AWS.Route53/IRoute53Manager',
        title:"IRoute53Manager",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator.SimCtl/SimCtlSettings',
        title:"SimCtlSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bamboo.Data/BambooCommitInfo',
        title:"BambooCommitInfo",
        description:""
    });

    y({
        url:'/api/Cake.VsCode/VscePublishSettings',
        title:"VscePublishSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Roundhouse/RecoveryMode',
        title:"RecoveryMode",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.XUnit/XUnit2SettingsExtensions',
        title:"XUnit2SettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core.Packaging/PackageReference',
        title:"PackageReference",
        description:""
    });

    y({
        url:'/api/Cake.CocoaPods/CocoaPodUpdateSettings',
        title:"CocoaPodUpdateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project.Properties/AssemblyInfoParseResult',
        title:"AssemblyInfoParseResult",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project.XmlDoc/XmlDocAliases',
        title:"XmlDocAliases",
        description:""
    });

    y({
        url:'/api/Cake.Storyteller/StorytellerCommand',
        title:"StorytellerCommand",
        description:""
    });

    y({
        url:'/api/Cake.Diagnostics/IDebugger',
        title:"IDebugger",
        description:""
    });

    y({
        url:'/api/Cake.WinSCP/WinScpExtensions',
        title:"WinScpExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerTool_1',
        title:"DockerTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.ActiveDirectory.Users/UserUpdate',
        title:"UserUpdate",
        description:""
    });

    y({
        url:'/api/Cake.Transifex/TransifexRunnerRemoteSettings_1',
        title:"TransifexRunnerRemoteSettings<TSettingsType>",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.TextTransform/TextTransformRunner',
        title:"TextTransformRunner",
        description:""
    });

    y({
        url:'/api/Cake.Gitter.Chat/GitterChatMessageSettings',
        title:"GitterChatMessageSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover/DotCoverReportType',
        title:"DotCoverReportType",
        description:""
    });

    y({
        url:'/api/Cake.FluentMigrator/FluentMigratorToolResolver',
        title:"FluentMigratorToolResolver",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.MyGet/MyGetProvider',
        title:"MyGetProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Fixie/FixieRunner',
        title:"FixieRunner",
        description:""
    });

    y({
        url:'/api/Cake.Putty/PuttyAliases',
        title:"PuttyAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.ContinuaCI.Data/ContinuaCIConfigurationInfo',
        title:"ContinuaCIConfigurationInfo",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion.Version/GenymotionVersion',
        title:"GenymotionVersion",
        description:""
    });

    y({
        url:'/api/Cake.FileSet/FileSetAliases',
        title:"FileSetAliases",
        description:""
    });

    y({
        url:'/api/Cake.Curl/CurlSettings',
        title:"CurlSettings",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerContainerStartSettings',
        title:"DockerContainerStartSettings",
        description:""
    });

    y({
        url:'/api/Cake.Npm.RunScript/NpmRunScriptSettings',
        title:"NpmRunScriptSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/SearchScope',
        title:"SearchScope",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterAppsGetCurrentSettings',
        title:"MobileCenterAppsGetCurrentSettings",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf.Database/DotNetCoreEfDatabaseDropper',
        title:"DotNetCoreEfDatabaseDropper",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Jenkins.Data/JenkinsChangeInfo',
        title:"JenkinsChangeInfo",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerSwarmInitSettings',
        title:"DockerSwarmInitSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.WiX/CandleRunner',
        title:"CandleRunner",
        description:""
    });

    y({
        url:'/api/Cake.DocFx/DocFxInitAliases',
        title:"DocFxInitAliases",
        description:""
    });

    y({
        url:'/api/Cake.AzureStorage/AzureStorage',
        title:"AzureStorage",
        description:""
    });

    y({
        url:'/api/Cake.Common.Xml/XmlPeekAliases',
        title:"XmlPeekAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover/DotCoverTool_1',
        title:"DotCoverTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.EntityFramework.Interfaces/IEfMigratorBackend',
        title:"IEfMigratorBackend",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy/IMsDeployArgument',
        title:"IMsDeployArgument",
        description:""
    });

    y({
        url:'/api/Cake.Common/EnvironmentAliases',
        title:"EnvironmentAliases",
        description:""
    });

    y({
        url:'/api/Cake.Http/IJsonSerializerStrategy',
        title:"IJsonSerializerStrategy",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSTest/VSTestRunner',
        title:"VSTestRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.XUnit/XUnitSettings',
        title:"XUnitSettings",
        description:""
    });

    y({
        url:'/api/Cake.Issues.MsBuild/MsBuildIssuesAliases',
        title:"MsBuildIssuesAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSBuild/MSBuildVerbosityExtensions',
        title:"MSBuildVerbosityExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey/ChocolateySettings',
        title:"ChocolateySettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.XUnit/ParallelismOption',
        title:"ParallelismOption",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild.Data/TFBuildInfo',
        title:"TFBuildInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSTest/VSTestFrameworkVersion',
        title:"VSTestFrameworkVersion",
        description:""
    });

    y({
        url:'/api/Cake.AndroidSdkManager/InstalledAndroidSdkPackage',
        title:"InstalledAndroidSdkPackage",
        description:""
    });

    y({
        url:'/api/Cake.Testing/FakeDirectory',
        title:"FakeDirectory",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.ContinuaCI.Data/ContinuaCIEnvironmentInfo',
        title:"ContinuaCIEnvironmentInfo",
        description:""
    });

    y({
        url:'/api/Cake.SqlServerPackager/SqlServerPackagerRunner',
        title:"SqlServerPackagerRunner",
        description:""
    });

    y({
        url:'/api/Cake.Compression.Classes/CompressionBase',
        title:"CompressionBase",
        description:""
    });

    y({
        url:'/api/Cake.NSwag/NSwagRunner',
        title:"NSwagRunner",
        description:""
    });

    y({
        url:'/api/Cake.Core.Tooling/IToolResolutionStrategy',
        title:"IToolResolutionStrategy",
        description:""
    });

    y({
        url:'/api/Cake.AppVeyor/AppVeyorDeployment',
        title:"AppVeyorDeployment",
        description:""
    });

    y({
        url:'/api/Cake.XComponent/XcToolsAliases',
        title:"XcToolsAliases",
        description:""
    });

    y({
        url:'/api/ResxConverter.Mobile/iOSResxConverterOutput',
        title:"iOSResxConverterOutput",
        description:""
    });

    y({
        url:'/api/Cake.Core.Annotations/CakeMethodAliasAttribute',
        title:"CakeMethodAliasAttribute",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/ArchiveDirProvider',
        title:"ArchiveDirProvider",
        description:""
    });

    y({
        url:'/api/Cake.Core/MethodInfoExtensions',
        title:"MethodInfoExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Tfx.Extension.Install/TfxExtensionInstallRunner',
        title:"TfxExtensionInstallRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey/ChocolateyAliases',
        title:"ChocolateyAliases",
        description:""
    });

    y({
        url:'/api/Cake.Kudu.KuduSync/KuduSyncRunner',
        title:"KuduSyncRunner",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerImageTagSettings',
        title:"DockerImageTagSettings",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/DotNetCoreTestExtensions',
        title:"DotNetCoreTestExtensions",
        description:""
    });

    y({
        url:'/api/Cake.AWS.CloudFront/CloudFrontAliases',
        title:"CloudFrontAliases",
        description:""
    });

    y({
        url:'/api/Cake.Testing/FakeEnvironment',
        title:"FakeEnvironment",
        description:""
    });

    y({
        url:'/api/Cake.StrongNameTool/StrongNameVerifyToolAliases',
        title:"StrongNameVerifyToolAliases",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/FileExtensions',
        title:"FileExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Npm.Publish/NpmPublisher',
        title:"NpmPublisher",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformDestroySettings',
        title:"TerraformDestroySettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.WiX.Heat/WiXHarvestType',
        title:"WiXHarvestType",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/GenericRunner_1',
        title:"GenericRunner<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Ember/EmberArgumentBuilder_1',
        title:"EmberArgumentBuilder<T>",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Download/ChocolateyDownloadSettings',
        title:"ChocolateyDownloadSettings",
        description:""
    });

    y({
        url:'/api/Cake.Kudu/KuduAliases',
        title:"KuduAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Sources/ChocolateySources',
        title:"ChocolateySources",
        description:""
    });

    y({
        url:'/api/Cake.NSwag.Settings/SwaggerGeneratorSettingsExtensions',
        title:"SwaggerGeneratorSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerBridge',
        title:"DockerBridge",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/InstallNodePackagedModulesSettings',
        title:"InstallNodePackagedModulesSettings",
        description:""
    });

    y({
        url:'/api/Cake.Newman.Reporters/HtmlReporterSettingsExtensions',
        title:"HtmlReporterSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core/ITaskSetupContext',
        title:"ITaskSetupContext",
        description:""
    });

    y({
        url:'/api/Cake.EntityFramework.CakeTranslation/EfMigratorSettings',
        title:"EfMigratorSettings",
        description:""
    });

    y({
        url:'/api/Cake.Tfx.Extension.Install/TfxExtensionInstallSettings',
        title:"TfxExtensionInstallSettings",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator/AppleSimulatorPairedPhone',
        title:"AppleSimulatorPairedPhone",
        description:""
    });

    y({
        url:'/api/Cake.Webpack/WebpackBuildMode',
        title:"WebpackBuildMode",
        description:""
    });

    y({
        url:'/api/Cake.AppPackager/AppPackagerTool_1',
        title:"AppPackagerTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.CocoaPods/CocoaPodSettings',
        title:"CocoaPodSettings",
        description:""
    });

    y({
        url:'/api/Cake.Issues/BaseRuleDescription',
        title:"BaseRuleDescription",
        description:""
    });

    y({
        url:'/api/Cake.CakeMail/CakeMailResult',
        title:"CakeMailResult",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Roundhouse/RoundhouseSettings',
        title:"RoundhouseSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSWhere.Legacy/VSWhereLegacySettings',
        title:"VSWhereLegacySettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.IO/FileAliases',
        title:"FileAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.WiX.Heat/WiXOutputGroupType',
        title:"WiXOutputGroupType",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeTaskExecutionStatus',
        title:"CakeTaskExecutionStatus",
        description:""
    });

    y({
        url:'/api/Cake.NSwag.Settings/GeneratorSettings',
        title:"GeneratorSettings",
        description:""
    });

    y({
        url:'/api/Cake.NuGet/INuGetContentResolver',
        title:"INuGetContentResolver",
        description:""
    });

    y({
        url:'/api/Cake.AWS.ElasticBeanstalk/ElasticBeanstalkManager',
        title:"ElasticBeanstalkManager",
        description:""
    });

    y({
        url:'/api/Cake.AppVeyor/AppVeyorEnvironment',
        title:"AppVeyorEnvironment",
        description:""
    });

    y({
        url:'/api/Cake.Putty/IpVersion',
        title:"IpVersion",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.MSBuild/MSBuildDistributedLogger',
        title:"MSBuildDistributedLogger",
        description:""
    });

    y({
        url:'/api/Cake.SqlTools/ISqlQueryRepository',
        title:"ISqlQueryRepository",
        description:""
    });

    y({
        url:'/api/Cake.Scripty/ScriptySettings',
        title:"ScriptySettings",
        description:""
    });

    y({
        url:'/api/Cake.CodeAnalysisReporting/CodeAnalysisReportingAliases',
        title:"CodeAnalysisReportingAliases",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/DbMySqlProvider',
        title:"DbMySqlProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GoCD.Data/GoCDModificationInfo',
        title:"GoCDModificationInfo",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerContainerStopSettings',
        title:"DockerContainerStopSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers/IMsDeployProvider',
        title:"IMsDeployProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OctopusDeploy/OctopusDeployPacker',
        title:"OctopusDeployPacker",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.MSBuild/DotNetCoreMSBuildBuilder',
        title:"DotNetCoreMSBuildBuilder",
        description:""
    });

    y({
        url:'/api/Cake.DocFx.Build/DocFxBuildSettings',
        title:"DocFxBuildSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterAnalyticsEventsShowSettings',
        title:"MobileCenterAnalyticsEventsShowSettings",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/ImportProxySettings',
        title:"ImportProxySettings",
        description:""
    });

    y({
        url:'/api/Cake.Twitter/TwitterProvider',
        title:"TwitterProvider",
        description:""
    });

    y({
        url:'/api/Xunit/AssertEx',
        title:"AssertEx",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseNotes/GitReleaseNotesRunner',
        title:"GitReleaseNotesRunner",
        description:""
    });

    y({
        url:'/api/Cake.XdtTransform/XdtTransformationAlias',
        title:"XdtTransformationAlias",
        description:""
    });

    y({
        url:'/api/Cake.Npm.Rebuild/NpmRebuildSettings',
        title:"NpmRebuildSettings",
        description:""
    });

    y({
        url:'/api/Cake.Raygun/RaygunSymbolUploadResponse',
        title:"RaygunSymbolUploadResponse",
        description:""
    });

    y({
        url:'/api/Cake.Common.Security/FileHashCalculator',
        title:"FileHashCalculator",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeEnvironment',
        title:"CakeEnvironment",
        description:""
    });

    y({
        url:'/api/Cake.Issues/IssuesArgumentChecks',
        title:"IssuesArgumentChecks",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/ManifestProvider',
        title:"ManifestProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.IO.Paths/ConvertableDirectoryPath',
        title:"ConvertableDirectoryPath",
        description:""
    });

    y({
        url:'/api/Cake.AWS.EC2/CakeEnvironmentExtensions',
        title:"CakeEnvironmentExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/NetCoreProject',
        title:"NetCoreProject",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantProvisionerSettings',
        title:"VagrantProvisionerSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet/NuGetMSBuildVersion',
        title:"NuGetMSBuildVersion",
        description:""
    });

    y({
        url:'/api/Cake.Apigee.Contracts/ErrorResult',
        title:"ErrorResult",
        description:""
    });

    y({
        url:'/api/Cake.EntityFramework.Migrator/EfMigratorBackend',
        title:"EfMigratorBackend",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator.UnitTest/SimCtlTool_1',
        title:"SimCtlTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator.Simulator/SimulatorTool_1',
        title:"SimulatorTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.VsCode/VsceAliases',
        title:"VsceAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.SignTool/SignToolSignRunner',
        title:"SignToolSignRunner",
        description:""
    });

    y({
        url:'/api/Cake.CakeMail.Email/CakeMailSettings',
        title:"CakeMailSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/WebServerProvider',
        title:"WebServerProvider",
        description:""
    });

    y({
        url:'/api/Cake.Wyam/WyamSettings',
        title:"WyamSettings",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerComposeUpSettings',
        title:"DockerComposeUpSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitVersion/GitVersionRunner',
        title:"GitVersionRunner",
        description:""
    });

    y({
        url:'/api/Cake.Xamarin/MDToolSetupRunner',
        title:"MDToolSetupRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common/ProcessAliases',
        title:"ProcessAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.SpecFlow/SpecFlowTool_1',
        title:"SpecFlowTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Core/IExecutionStrategy',
        title:"IExecutionStrategy",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TravisCI.Data/TravisCIEnvironmentInfo',
        title:"TravisCIEnvironmentInfo",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerComposeRunSettings',
        title:"DockerComposeRunSettings",
        description:""
    });

    y({
        url:'/api/Cake.StrongNameTool/IStrongNameToolResolver',
        title:"IStrongNameToolResolver",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor/AppVeyorProvider',
        title:"AppVeyorProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TeamCity/TeamCityProvider',
        title:"TeamCityProvider",
        description:""
    });

    y({
        url:'/api/Cake.SqlPackage/AzureKeyVaultAuthMethod',
        title:"AzureKeyVaultAuthMethod",
        description:""
    });

    y({
        url:'/api/Cake.Issues.PullRequests/PullRequestsAliasConstants',
        title:"PullRequestsAliasConstants",
        description:""
    });

    y({
        url:'/api/Cake.Services/IServiceManager',
        title:"IServiceManager",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/SyncSettingsExtensions',
        title:"SyncSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/AdbLogcatOptions',
        title:"AdbLogcatOptions",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/ListKeyValueMapsSettings',
        title:"ListKeyValueMapsSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSBuild/MSBuildBinaryLogImports',
        title:"MSBuildBinaryLogImports",
        description:""
    });

    y({
        url:'/api/Cake.Core/ConsoleExtensions',
        title:"ConsoleExtensions",
        description:""
    });

    y({
        url:'/api/Cake.DocFx/DocFxAliases',
        title:"DocFxAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core/TaskTeardownEventArgs',
        title:"TaskTeardownEventArgs",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestStatusSettings',
        title:"MobileCenterTestStatusSettings",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantUpSettings',
        title:"VagrantUpSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.WiX/Architecture',
        title:"Architecture",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.MyGet/MyGetBuildStatus',
        title:"MyGetBuildStatus",
        description:""
    });

    y({
        url:'/api/Cake.Core.Annotations/CakeNamespaceImportAttribute',
        title:"CakeNamespaceImportAttribute",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild.Data/TFBuildDefinitionInfo',
        title:"TFBuildDefinitionInfo",
        description:""
    });

    y({
        url:'/api/Cake.Squirrel/SquirrelSettings',
        title:"SquirrelSettings",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/AdbPermissionGroupInfo',
        title:"AdbPermissionGroupInfo",
        description:""
    });

    y({
        url:'/api/Cake.Gulp/GulpRunnerAliases',
        title:"GulpRunnerAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.ContinuaCI/ContinuaCIInfo',
        title:"ContinuaCIInfo",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformEnvListRunner',
        title:"TerraformEnvListRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor.Data/AppVeyorBuildInfo',
        title:"AppVeyorBuildInfo",
        description:""
    });

    y({
        url:'/api/Cake.Xamarin/XamarinComponentSettings',
        title:"XamarinComponentSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GoCD.Data/GoCDPipelineInfo',
        title:"GoCDPipelineInfo",
        description:""
    });

    y({
        url:'/api/Cake.Issues.Testing/FakeRuleDescription',
        title:"FakeRuleDescription",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitVersion/GitVersionAliases',
        title:"GitVersionAliases",
        description:""
    });

    y({
        url:'/api/Cake.Newman.Reporters/CLIReporterSettingsExtensions',
        title:"CLIReporterSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.AWS.CodeDeploy/DeploySettingsExtensions',
        title:"DeploySettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common/ReleaseNotesParser',
        title:"ReleaseNotesParser",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterAppsDeleteSettings',
        title:"MobileCenterAppsDeleteSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterBuildLogsSettings',
        title:"MobileCenterBuildLogsSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeTaskBuilder_1',
        title:"CakeTaskBuilder<T>",
        description:""
    });

    y({
        url:'/api/Cake.SqlPackage/SqlPackagePublishSettings',
        title:"SqlPackagePublishSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NUnit/NUnitAppDomainUsage',
        title:"NUnitAppDomainUsage",
        description:""
    });

    y({
        url:'/api/Cake.Webpack/WebpackRunnerAliases',
        title:"WebpackRunnerAliases",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantBoxRemoveSettings',
        title:"VagrantBoxRemoveSettings",
        description:""
    });

    y({
        url:'/api/Cake.Putty/ArgumentsBuilderExtension',
        title:"ArgumentsBuilderExtension",
        description:""
    });

    y({
        url:'/api/Cake.Issues.Testing/FakeRuleUrlResolver',
        title:"FakeRuleUrlResolver",
        description:""
    });

    y({
        url:'/api/Cake.Core.Annotations/CakeAliasAttribute',
        title:"CakeAliasAttribute",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.ContinuaCI/ContinuaCIProvider',
        title:"ContinuaCIProvider",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerComposeSettings',
        title:"DockerComposeSettings",
        description:""
    });

    y({
        url:'/api/Cake.AppVeyor/AppVeyorAliases',
        title:"AppVeyorAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting.Analysis/ScriptAnalyzer',
        title:"ScriptAnalyzer",
        description:""
    });

    y({
        url:'/api/Cake.AutoRest/CSharpGeneratorSettings',
        title:"CSharpGeneratorSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/IScriptProcessor',
        title:"IScriptProcessor",
        description:""
    });

    y({
        url:'/api/Cake.AppVeyor/AppVeyorSettings',
        title:"AppVeyorSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor/AppVeyorTestResultsType',
        title:"AppVeyorTestResultsType",
        description:""
    });

    y({
        url:'/api/Cake.Email/EmailResult',
        title:"EmailResult",
        description:""
    });

    y({
        url:'/api/MagicChunks.Core/ITransformer',
        title:"ITransformer",
        description:""
    });

    y({
        url:'/api/Cake.Ember/EmberSettings',
        title:"EmberSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakeReport',
        title:"CakeReport",
        description:""
    });

    y({
        url:'/api/Cake.SqlPackage/SqlPackageAliases',
        title:"SqlPackageAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools/DotNetBuildSettings',
        title:"DotNetBuildSettings",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerNetworkConnectSettings',
        title:"DockerNetworkConnectSettings",
        description:""
    });

    y({
        url:'/api/Cake.SqlTools/SqlQueryAliases',
        title:"SqlQueryAliases",
        description:""
    });

    y({
        url:'/api/Cake.Npm/NpmInstallAliases',
        title:"NpmInstallAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bitrise/BitriseProvider',
        title:"BitriseProvider",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Build/DotNetCoreBuildSettings',
        title:"DotNetCoreBuildSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.SignTool/SignToolSignSettings',
        title:"SignToolSignSettings",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion.License/GenymotionLicense',
        title:"GenymotionLicense",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerContainerRunSettings',
        title:"DockerContainerRunSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Jenkins.Data/JenkinsBuildInfo',
        title:"JenkinsBuildInfo",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Parameters/SetParameter',
        title:"SetParameter",
        description:""
    });

    y({
        url:'/api/Cake.Ember/EmberAliases',
        title:"EmberAliases",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy/MsDeployAliases',
        title:"MsDeployAliases",
        description:""
    });

    y({
        url:'/api/Cake.MicrosoftTeams/MicrosoftTeamsSettings',
        title:"MicrosoftTeamsSettings",
        description:""
    });

    y({
        url:'/api/Cake.EntityFramework.Interfaces/ILogger',
        title:"ILogger",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantBoxUpdateSettingsExtensions',
        title:"VagrantBoxUpdateSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator/AppleSimulatorRuntime',
        title:"AppleSimulatorRuntime",
        description:""
    });

    y({
        url:'/api/Cake.Gulp/GulpRunner_1',
        title:"GulpRunner<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSBuild/MSBuildSettingsExtensions',
        title:"MSBuildSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerContainerLogsSettings',
        title:"DockerContainerLogsSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/ProcessArgumentBuilder',
        title:"ProcessArgumentBuilder",
        description:""
    });

    y({
        url:'/api/Cake.Transifex/TransifexInitSettings',
        title:"TransifexInitSettings",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/PackageManagerAliases',
        title:"PackageManagerAliases",
        description:""
    });

    y({
        url:'/api/Cake.Issues.EsLint/EsLintIssuesAliases',
        title:"EsLintIssuesAliases",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/ICredentialSettings',
        title:"ICredentialSettings",
        description:""
    });

    y({
        url:'/api/Cake.JMeter/JMeterAliases',
        title:"JMeterAliases",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterAppsUpdateSettings',
        title:"MobileCenterAppsUpdateSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTokensCreateSettings',
        title:"MobileCenterTokensCreateSettings",
        description:""
    });

    y({
        url:'/api/Cake.Issues/IssuesReader',
        title:"IssuesReader",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion.License/GenymotionLicenseType',
        title:"GenymotionLicenseType",
        description:""
    });

    y({
        url:'/api/Cake.SqlServerPackager/SqlServerPackagerExtensions',
        title:"SqlServerPackagerExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitLink/GitLink3Settings',
        title:"GitLink3Settings",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/KeyValueMap',
        title:"KeyValueMap",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion/GenymotionReturnCode',
        title:"GenymotionReturnCode",
        description:""
    });

    y({
        url:'/api/Cake.AndroidSdkManager/AvailableAndroidSdkUpdate',
        title:"AvailableAndroidSdkUpdate",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor/AppVeyorInfo',
        title:"AppVeyorInfo",
        description:""
    });

    y({
        url:'/api/Cake.Gitter.Chat/GitterMessageLevel',
        title:"GitterMessageLevel",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/AssertExtensions',
        title:"AssertExtensions",
        description:""
    });

    y({
        url:'/api/Cake.SqlServerPackager/SqlServerPackagerSettings',
        title:"SqlServerPackagerSettings",
        description:""
    });

    y({
        url:'/api/Cake.Orchard/OrchardAliases',
        title:"OrchardAliases",
        description:""
    });

    y({
        url:'/api/Cake.Kudu.Provider/WebSite',
        title:"WebSite",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator/AppleSimulator',
        title:"AppleSimulator",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GitLabCI.Data/GitLabCIServerInfo',
        title:"GitLabCIServerInfo",
        description:""
    });

    y({
        url:'/api/Cake.Sonar.Attributes/SecretArgumentAttribute',
        title:"SecretArgumentAttribute",
        description:""
    });

    y({
        url:'/api/Cake.Http/JsonArray',
        title:"JsonArray",
        description:""
    });

    y({
        url:'/api/Cake.Gulp/GulpLocalRunnerSettings',
        title:"GulpLocalRunnerSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.InnoSetup/InnoSetupAliases',
        title:"InnoSetupAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core/ICakeReportPrinter',
        title:"ICakeReportPrinter",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Install/NuGetInstallSettings',
        title:"NuGetInstallSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ReportUnit/ReportUnitRunner',
        title:"ReportUnitRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSBuild/MSBuildRunner',
        title:"MSBuildRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Run/DotNetCoreRunner',
        title:"DotNetCoreRunner",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformDestroyRunner',
        title:"TerraformDestroyRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ILRepack/ILRepackAliases',
        title:"ILRepackAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core.Diagnostics/CakeBuildLog',
        title:"CakeBuildLog",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.OpenCover/OpenCoverRunner',
        title:"OpenCoverRunner",
        description:""
    });

    y({
        url:'/api/Cake.WebDeploy/DeploySettings',
        title:"DeploySettings",
        description:""
    });

    y({
        url:'/api/Cake.Apigee/DeleteApiProxyRevisionSettings',
        title:"DeleteApiProxyRevisionSettings",
        description:""
    });

    y({
        url:'/api/ResxConverter.Core/IResxConverterOutputFactory',
        title:"IResxConverterOutputFactory",
        description:""
    });

    y({
        url:'/api/Cake.Newman/NewmanSettingsExtensions',
        title:"NewmanSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Issues.MsBuild/MsBuildRuleDescription',
        title:"MsBuildRuleDescription",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GoCD.Data/GoCDStageInfo',
        title:"GoCDStageInfo",
        description:""
    });

    y({
        url:'/api/Cake.CakeMail/CakeMailAliases',
        title:"CakeMailAliases",
        description:""
    });

    y({
        url:'/api/Cake.MarkdownToPdf/PdfPageMargins',
        title:"PdfPageMargins",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerImagePullSettings',
        title:"DockerImagePullSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/CakeContextExtensions',
        title:"CakeContextExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitReleaseManager.Publish/GitReleaseManagerPublisher',
        title:"GitReleaseManagerPublisher",
        description:""
    });

    y({
        url:'/api/Cake.VsixSignTool/VsixSignToolVerifySettings',
        title:"VsixSignToolVerifySettings",
        description:""
    });

    y({
        url:'/api/Cake.FluentMigrator/IFluentMigratorToolResolver',
        title:"IFluentMigratorToolResolver",
        description:""
    });

    y({
        url:'/api/Cake.StrongNameTool/StrongNameToolSettings',
        title:"StrongNameToolSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitLink/GitLink3Aliases',
        title:"GitLink3Aliases",
        description:""
    });

    y({
        url:'/api/Cake.AppPackager.Pack/AppPacker',
        title:"AppPacker",
        description:""
    });

    y({
        url:'/api/Cake.Docker/AutoPropertyAttribute',
        title:"AutoPropertyAttribute",
        description:""
    });

    y({
        url:'/api/Cake.SynVer/SynVerAliases',
        title:"SynVerAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.SpecFlow.StepDefinitionReport/SpecFlowStepDefinitionReportSettings',
        title:"SpecFlowStepDefinitionReportSettings",
        description:""
    });

    y({
        url:'/api/Cake.Core/ITaskTeardownContext',
        title:"ITaskTeardownContext",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.BitbucketPipelines/BitbucketPipelinesInfo',
        title:"BitbucketPipelinesInfo",
        description:""
    });

    y({
        url:'/api/Cake.Watch/FileChange',
        title:"FileChange",
        description:""
    });

    y({
        url:'/api/Cake.Ember.Serve/EmberServeRunner',
        title:"EmberServeRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSWhere.All/VSWhereAll',
        title:"VSWhereAll",
        description:""
    });

    y({
        url:'/api/Cake.Azure/Credentials',
        title:"Credentials",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.InnoSetup/InnoSetupSettings',
        title:"InnoSetupSettings",
        description:""
    });

    y({
        url:'/api/Cake.AndroidSdkManager/AndroidSdkChannel',
        title:"AndroidSdkChannel",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.Config/ChocolateyConfigSetter',
        title:"ChocolateyConfigSetter",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/IProcess',
        title:"IProcess",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/CertStoreSettingsProvider',
        title:"CertStoreSettingsProvider",
        description:""
    });

    y({
        url:'/api/Cake.Issues/ReadIssuesSettings',
        title:"ReadIssuesSettings",
        description:""
    });

    y({
        url:'/api/Cake.Transifex/TransifexRunnerSettings_1',
        title:"TransifexRunnerSettings<TSettingsType>",
        description:""
    });

    y({
        url:'/api/Cake.HockeyApp/NoteType',
        title:"NoteType",
        description:""
    });

    y({
        url:'/api/Cake.Core/ICakeEngine',
        title:"ICakeEngine",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Commands/VagrantCommandRunner',
        title:"VagrantCommandRunner",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Publish/DotNetCorePublishSettings',
        title:"DotNetCorePublishSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/AppHostConfigProvider',
        title:"AppHostConfigProvider",
        description:""
    });

    y({
        url:'/api/Cake.Issues.EsLint/ILogFileFormat',
        title:"ILogFileFormat",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.XUnit/XUnit2Settings',
        title:"XUnit2Settings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TeamCity.Data/TeamCityBuildInfo',
        title:"TeamCityBuildInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.MSBuild/MSBuildFileLogger',
        title:"MSBuildFileLogger",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf.Migration/DotNetCoreEfMigrationAdder',
        title:"DotNetCoreEfMigrationAdder",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.Chocolatey.ApiKey/ChocolateyApiKeySetter',
        title:"ChocolateyApiKeySetter",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator.UnitTest/TestResults',
        title:"TestResults",
        description:""
    });

    y({
        url:'/api/Cake.Testing.Xunit/RuntimeTheory',
        title:"RuntimeTheory",
        description:""
    });

    y({
        url:'/api/Cake.Npm/NpmPublishAliases',
        title:"NpmPublishAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core.Diagnostics/LogLevel',
        title:"LogLevel",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf.Migration/DotNetCoreEfMigrationScriptSettings',
        title:"DotNetCoreEfMigrationScriptSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.GitLink/GitLinkRunner',
        title:"GitLinkRunner",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/AdbToolSettings',
        title:"AdbToolSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestRunEspressoSettings',
        title:"MobileCenterTestRunEspressoSettings",
        description:""
    });

    y({
        url:'/api/Cake.Gem.Build/GemBuildRunner',
        title:"GemBuildRunner",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerComposeBuildSettings',
        title:"DockerComposeBuildSettings",
        description:""
    });

    y({
        url:'/api/Cake.OctoVariapus/OctoVariable',
        title:"OctoVariable",
        description:""
    });

    y({
        url:'/api/Cake.AWS.S3/SyncPath',
        title:"SyncPath",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Push/NuGetPushSettings',
        title:"NuGetPushSettings",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/AdbPackageListInfo',
        title:"AdbPackageListInfo",
        description:""
    });

    y({
        url:'/api/Cake.Path/PathSettings',
        title:"PathSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterTestStopSettings',
        title:"MobileCenterTestStopSettings",
        description:""
    });

    y({
        url:'/api/Cake.EntityFramework.CakeTranslation/CakeLogger',
        title:"CakeLogger",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerContainerCpSettings',
        title:"DockerContainerCpSettings",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerAliases',
        title:"DockerAliases",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/ContentPathProvider',
        title:"ContentPathProvider",
        description:""
    });

    y({
        url:'/api/Cake.XComponent/XcStudioAliases',
        title:"XcStudioAliases",
        description:""
    });

    y({
        url:'/api/Cake.AzureStorage/AzureStorageSettings',
        title:"AzureStorageSettings",
        description:""
    });

    y({
        url:'/api/Cake.MobileCenter/MobileCenterDistributeReleasesListSettings',
        title:"MobileCenterDistributeReleasesListSettings",
        description:""
    });

    y({
        url:'/api/Cake.EntityFramework.Models/MigrationResult',
        title:"MigrationResult",
        description:""
    });

    y({
        url:'/api/Cake.SqlPackage/SqlPackageExportSettings',
        title:"SqlPackageExportSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.ReportGenerator/ReportGeneratorVerbosity',
        title:"ReportGeneratorVerbosity",
        description:""
    });

    y({
        url:'/api/Cake.AWS.Route53/Route53Aliases',
        title:"Route53Aliases",
        description:""
    });

    y({
        url:'/api/Cake/Program',
        title:"Program",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GitLabCI.Data/GitLabCIBuildInfo',
        title:"GitLabCIBuildInfo",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/ScriptProcessor',
        title:"ScriptProcessor",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.Bitrise.Data/BitriseEnvironmentInfo',
        title:"BitriseEnvironmentInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover/DotCoverSettings',
        title:"DotCoverSettings",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/FilePathProvider',
        title:"FilePathProvider",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator/AppleSimulatorAliases',
        title:"AppleSimulatorAliases",
        description:""
    });

    y({
        url:'/api/Cake.VsCode/VscePublisher',
        title:"VscePublisher",
        description:""
    });

    y({
        url:'/api/Cake.Npm.Pack/NpmPacker',
        title:"NpmPacker",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/DotNetCliToolReference',
        title:"DotNetCliToolReference",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantUpSettingsExtensions',
        title:"VagrantUpSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSWhere/VSWhereSettings',
        title:"VSWhereSettings",
        description:""
    });

    y({
        url:'/api/Cake.AWS.EC2/EC2SettingsExtensions',
        title:"EC2SettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project/ProjectParser',
        title:"ProjectParser",
        description:""
    });

    y({
        url:'/api/Cake.Testing.Fixtures/ToolFixture_1',
        title:"ToolFixture<TToolSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.AppVeyor.Data/AppVeyorEnvironmentInfo',
        title:"AppVeyorEnvironmentInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Solution.Project/ProjectAliases',
        title:"ProjectAliases",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/IScriptAliasFinder',
        title:"IScriptAliasFinder",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.GoCD.Data/GoCDRepositoryInfo',
        title:"GoCDRepositoryInfo",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.NuGet.Delete/DotNetCoreNuGetDeleteSettings',
        title:"DotNetCoreNuGetDeleteSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover/DotCoverCoverageTool_1',
        title:"DotCoverCoverageTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.NSwag.Settings/TypeScriptGeneratorSettingsExtensions',
        title:"TypeScriptGeneratorSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.CMake/CMakeSettings',
        title:"CMakeSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.VSWhere/VSWhereAliases',
        title:"VSWhereAliases",
        description:""
    });

    y({
        url:'/api/Cake.MarkdownToPdf/PdfPageOrientation',
        title:"PdfPageOrientation",
        description:""
    });

    y({
        url:'/api/Cake.MicrosoftTeams/MicrosoftTeamsMessageCard',
        title:"MicrosoftTeamsMessageCard",
        description:""
    });

    y({
        url:'/api/Cake.Git/GitBranch',
        title:"GitBranch",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotCover/DotCoverCoverageSettings',
        title:"DotCoverCoverageSettings",
        description:""
    });

    y({
        url:'/api/Cake.Testing.Xunit/WindowsFact',
        title:"WindowsFact",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NUnit/NUnitSettings',
        title:"NUnitSettings",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion.Admin/AndroidScreenDensity',
        title:"AndroidScreenDensity",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NUnit/NUnit3Result',
        title:"NUnit3Result",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.SpecFlow.TestExecutionReport/SpecFlowTestExecutionReportSettings',
        title:"SpecFlowTestExecutionReportSettings",
        description:""
    });

    y({
        url:'/api/Cake.Endpoint.Model/Directory',
        title:"Directory",
        description:""
    });

    y({
        url:'/api/Cake.SqlServer/LocalDbAliases',
        title:"LocalDbAliases",
        description:""
    });

    y({
        url:'/api/Cake.WinSCP/WinScpRunner',
        title:"WinScpRunner",
        description:""
    });

    y({
        url:'/api/Cake.SqlTools/MySqlQueryRepository',
        title:"MySqlQueryRepository",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.Execute/DotNetCoreExecuteSettings',
        title:"DotNetCoreExecuteSettings",
        description:""
    });

    y({
        url:'/api/Cake.Tfx.Extension.Share/TfxExtensionShareSettings',
        title:"TfxExtensionShareSettings",
        description:""
    });

    y({
        url:'/api/Cake.Ftp.Services/FtpService',
        title:"FtpService",
        description:""
    });

    y({
        url:'/api/Cake.Issues/RepositorySettings',
        title:"RepositorySettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Net/DownloadFileSettings',
        title:"DownloadFileSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.TextTransform/TextTransformAliases',
        title:"TextTransformAliases",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantBoxAddSettings',
        title:"VagrantBoxAddSettings",
        description:""
    });

    y({
        url:'/api/Cake.XCode/XCodeSdk',
        title:"XCodeSdk",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/ComObject32Provider',
        title:"ComObject32Provider",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Parameters/ParameterKind',
        title:"ParameterKind",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant/VagrantAliases',
        title:"VagrantAliases",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.DotNetCore.NuGet.Push/DotNetCoreNuGetPushSettings',
        title:"DotNetCoreNuGetPushSettings",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TFBuild/ITFBuildCommands',
        title:"ITFBuildCommands",
        description:""
    });

    y({
        url:'/api/Cake.Common.Tools.NuGet.Update/NuGetUpdateSettings',
        title:"NuGetUpdateSettings",
        description:""
    });

    y({
        url:'/api/Cake.DotNetCoreEf/DotNetCoreEfTool_1',
        title:"DotNetCoreEfTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Incubator/StringExtensions',
        title:"StringExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Bumpy/BumpyRunner',
        title:"BumpyRunner",
        description:""
    });

    y({
        url:'/api/Cake.Coveralls/CoverallsAliases',
        title:"CoverallsAliases",
        description:""
    });

    y({
        url:'/api/Cake.Npm.RunScript/NpmRunScriptSettingsExtensions',
        title:"NpmRunScriptSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.SqlServerPackager/Logger',
        title:"Logger",
        description:""
    });

    y({
        url:'/api/Cake.Ftp/FtpAliases',
        title:"FtpAliases",
        description:""
    });

    y({
        url:'/api/Cake.Docker/DockerComposeTool_1',
        title:"DockerComposeTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting.Processors.Loading/ILoadDirectiveProvider',
        title:"ILoadDirectiveProvider",
        description:""
    });

    y({
        url:'/api/Cake.Core/CakePlatformExtensions',
        title:"CakePlatformExtensions",
        description:""
    });

    y({
        url:'/api/Cake.VsixSignTool/BoolParameterAttribute',
        title:"BoolParameterAttribute",
        description:""
    });

    y({
        url:'/api/Cake.Common.Build.TravisCI/TravisCIDisposableExtensions',
        title:"TravisCIDisposableExtensions",
        description:""
    });

    y({
        url:'/api/Cake.HipChat/HipChatAliases',
        title:"HipChatAliases",
        description:""
    });

    y({
        url:'/api/Cake.AWS.CloudFront/ICloudFrontManager',
        title:"ICloudFrontManager",
        description:""
    });

    y({
        url:'/api/Cake.Vagrant.Settings/VagrantPackageSettings',
        title:"VagrantPackageSettings",
        description:""
    });

    y({
        url:'/api/Cake.StrongNameTool/StrongNameToolRunner',
        title:"StrongNameToolRunner",
        description:""
    });

    y({
        url:'/api/Cake.Genymotion.Admin/GenymotionSimulatorTemplate',
        title:"GenymotionSimulatorTemplate",
        description:""
    });

    y({
        url:'/api/Cake.Apigee.Contracts/CreateKeyValueMapResult',
        title:"CreateKeyValueMapResult",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Providers.MsDeployProviders/GacInstallProvider',
        title:"GacInstallProvider",
        description:""
    });

    y({
        url:'/api/Cake.AppleSimulator.XCRun/XCRunTool_1',
        title:"XCRunTool<TSettings>",
        description:""
    });

    y({
        url:'/api/Cake.MsDeploy.Parameters/DeclareParameter',
        title:"DeclareParameter",
        description:""
    });

    y({
        url:'/api/Cake.AndroidAdb/AdbDeviceInfo',
        title:"AdbDeviceInfo",
        description:""
    });

    y({
        url:'/api/Cake.Issues.Testing/FakeIssueProvider',
        title:"FakeIssueProvider",
        description:""
    });

    y({
        url:'/api/Cake.Core.Composition/ContainerRegistrarExtensions',
        title:"ContainerRegistrarExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Npm.Install/NpmInstallSettingsExtensions',
        title:"NpmInstallSettingsExtensions",
        description:""
    });

    y({
        url:'/api/Cake.Core.IO/Path',
        title:"Path",
        description:""
    });

    y({
        url:'/api/Cake.Core.Scripting/Script',
        title:"Script",
        description:""
    });

    y({
        url:'/api/Cake.Terraform/TerraformInitRunner',
        title:"TerraformInitRunner",
        description:""
    });

    y({
        url:'/api/Cake.Http/JsonObject',
        title:"JsonObject",
        description:""
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();

﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// UserProxyAgent.cs

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.SemanticKernel.AI.ChatCompletion;

namespace AutoGen
{
    public class UserProxyAgent : IAgent
    {
        public string Name => throw new System.NotImplementedException();

        public Task<ChatMessage> GenerateReplyAsync(IEnumerable<ChatMessage> messages, CancellationToken? cancellationToken = null)
        {
            throw new System.NotImplementedException();
        }
    }
}
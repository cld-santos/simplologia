package br.cld.simplologia;

/*
 * Copyright 2001-2005 The Apache Software Foundation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

/**
 * Goal which touches a timestamp file.
 *
 * @goal publish
 * 
 * @phase process-sources
 */
public class GisServerPublisher extends AbstractMojo
{
    /**
     * Location of the file.
     * @parameter expression="${project.build.urlServer}"
     * @required
     */
    private String urlServer;

    /**
     * Location of the file.
     * @parameter expression="${project.build.jsonServicePath}"
     * @required
     */
    private String jsonServicePath;
    
    /**
     * Location of the file.
     * @parameter expression="${project.build.tokenService}"
     * @required
     */
    private String tokenService;
    
    
    public void execute() throws MojoExecutionException
    {
    	CreateMapService oCriador = new CreateMapService();
    	getLog().info( oCriador.publish(urlServer, jsonServicePath, tokenService) );   	
  	
    }
}

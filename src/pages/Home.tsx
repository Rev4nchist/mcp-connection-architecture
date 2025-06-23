/**
 * Home page component that displays MCP Server Architecture Visual Guide
 * with a hero section and detailed information sections
 */
import React, { useEffect } from 'react';
import { 
  GlobeAltIcon, 
  CircleStackIcon, 
  ShieldCheckIcon, 
  ArchiveBoxIcon, 
  BoltIcon, 
  ServerIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';
import HeroHeader, { ScrollProgressBar } from "@/components/HeroHeader";

const Home: React.FC = () => {
  // Animation effect for sections to fade in when scrolled into view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          // Once the animation is applied, stop observing the element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Delay setting up the observer to ensure the DOM is fully loaded
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('.animate-section');
      sections.forEach(section => {
        // Set initial opacity to ensure content is visible by default
        section.classList.remove('opacity-0');
        section.classList.add('opacity-100');
        observer.observe(section);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      const sections = document.querySelectorAll('.animate-section');
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroHeader />
      <ScrollProgressBar type="bar" color="#8b5cf6" strokeSize={3} />

      {/* Main Content */}
      <main id="main-content" className="container mx-auto px-4 py-16">
        {/* Data Sources Section */}
        <section className="mb-24 animate-section opacity-100 transition-opacity duration-700">
          <h2 className="text-3xl font-bold mb-10 text-center">Company Data Sources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-100">
              <div className="flex items-center mb-4">
                <GlobeAltIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Microsoft 365/Teams</h3>
              </div>
              <p>Collaboration platform and productivity suite</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-100">
              <div className="flex items-center mb-4">
                <CircleStackIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">SharePoint/OneDrive</h3>
              </div>
              <p>Document storage and content management</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-100">
              <div className="flex items-center mb-4">
                <CircleStackIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">SQL Databases</h3>
              </div>
              <p>Structured data storage and retrieval</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-100">
              <div className="flex items-center mb-4">
                <CircleStackIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">CRM Systems</h3>
              </div>
              <p>Customer relationship management platforms</p>
            </div>
          </div>
        </section>

        {/* Data Classification Section */}
        <section className="mb-24 animate-section opacity-100 transition-opacity duration-700">
          <h2 className="text-3xl font-bold mb-10 text-center">Data Classification</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-green-100">
              <div className="flex items-center mb-4">
                <GlobeAltIcon className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">Public/Internal Data</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Marketing materials</li>
                <li>Public documentation</li>
                <li>General policies</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-yellow-100">
              <div className="flex items-center mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-semibold">Confidential Data</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Financial records</li>
                <li>Customer information</li>
                <li>Product subscription & details</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-red-100">
              <div className="flex items-center mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold">Restricted Data</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Employee records</li>
                <li>Legal documents</li>
                <li>Trade secrets</li>
              </ul>
            </div>
          </div>
        </section>

        {/* MCP Options Section */}
        <section className="mb-24 animate-section opacity-100 transition-opacity duration-700">
          <h2 className="text-3xl font-bold mb-10 text-center">MCP Implementation Options</h2>
          
          {/* OpenAI/Claude-Hosted MCP */}
          <div className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <GlobeAltIcon className="h-10 w-10 text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold">OpenAI/Claude-Hosted MCP</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-medium mb-4">Server Features</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>OAuth Authentication</li>
                  <li>Role-based access controls</li>
                </ul>
                
                <h4 className="text-xl font-medium mb-4 mt-6">Search-Only Operations Include:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Document search across SharePoint/Teams</li>
                  <li>Policy and procedure Q&A</li>
                  <li>Project status inquiries</li>
                  <li>Knowledge base interactions</li>
                  <li>File content retrieval with permissions</li>
                  <li>Calendar and meeting search</li>
                  <li>Contact directory access</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-medium mb-4">Integration Details</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Enterprise-grade processing</li>
                  <li>30-day retention default</li>
                  <li>EU/US data centers available</li>
                  <li>Claude offers a more mature MCP ecosystem</li>
                  <li>OpenAI and Claude data policies apply</li>
                </ul>
                
                <div className="mt-8 bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Security Level: Medium</h4>
                  <p className="mb-2">Data sent to AI platforms - Teams Agreement covers No Data Training</p>
                  <p>Cost: $30/user/month + MCP connections & development</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Self-Hosted Docker MCP */}
          <div className="mb-16 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <ArchiveBoxIcon className="h-10 w-10 text-indigo-600 mr-4" />
              <h3 className="text-2xl font-semibold">Self-Hosted Docker MCP</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-medium mb-4">Docker Personal Assistant Setup</h4>
                <p className="mb-4">Real Example: Docker + Claude Personal Assistant with integrated memory system for persistent context and learning across sessions.</p>
                
                <h4 className="text-xl font-medium mb-4 mt-6">Infrastructure</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>On-premises deployment</li>
                  <li>Custom authentication</li>
                  <li>Full audit logging</li>
                  <li>Isolated network deployment</li>
                </ul>
                
                <h4 className="text-xl font-medium mb-4 mt-6">Memory Integration Benefits</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Persistent Context: Remembers previous conversations and decisions</li>
                  <li>Learning Capability: Adapts to user preferences and workflows</li>
                  <li>Neo4j Graph Memory: Complex relationship mapping</li>
                  <li>Session Continuity: Seamless experience across interactions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-medium mb-4">Processing</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Local AI models (Claude/Llama)</li>
                  <li>Custom business logic</li>
                  <li>Real-time monitoring</li>
                  <li>Zero external transmission</li>
                </ul>
                
                <h4 className="text-xl font-medium mb-4 mt-6">AI Processing</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Complete data sovereignty</li>
                  <li>Custom model fine-tuning</li>
                  <li>Unlimited query complexity</li>
                  <li>Full context retention</li>
                </ul>
                
                <div className="mt-8 bg-indigo-100 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Security Level: Maximum</h4>
                  <p className="mb-2">All data stays internal</p>
                  <p>Cost: Free MCP Docker Hub access</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Zapier MCP Hub */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <BoltIcon className="h-10 w-10 text-purple-600 mr-4" />
              <h3 className="text-2xl font-semibold">Zapier MCP Hub</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-medium mb-4">Platform Features</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>7,000+ pre-built connectors</li>
                  <li>OAuth 2.0 authentication</li>
                  <li>300 free actions/month</li>
                  <li>SOC 2 Type II certified</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-medium mb-4">Processing</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Managed authentication</li>
                  <li>Auto-retry failed operations</li>
                  <li>Webhook-based real-time sync</li>
                  <li>Multi-step workflow support</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-medium mb-4">Integrations</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Salesforce, Outlook, Teams, Slack, SharePoint</li>
                  <li>Microsoft 365 automation</li>
                  <li>Database synchronization</li>
                  <li>Custom API connections</li>
                </ul>
                
                <div className="mt-8 bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Security Level: High</h4>
                  <p className="mb-2">Managed by Zapier infrastructure</p>
                  <p>Cost: Free tier to $599/month</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Analysis Section */}
        <section className="mb-24 animate-section opacity-100 transition-opacity duration-700">
          <h2 className="text-3xl font-bold mb-10 text-center">Implementation Analysis</h2>
          
          {/* Complexity Assessment */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <CheckCircleIcon className="h-6 w-6 text-blue-600" />
              </div>
              Complexity Assessment
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50">
                <h4 className="text-xl font-medium mb-4">OpenAI/Claude-Hosted MCP</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Custom setup & development (1-3 weeks) - for pilot and initial team rollout</li>
                  <li>Microsoft Graph API integration</li>
                  <li>Data sanitization rule engine</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50">
                <h4 className="text-xl font-medium mb-4">Docker MCP</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Infrastructure setup and maintenance</li>
                  <li>Local AI model deployment</li>
                  <li>High-availability clustering</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50">
                <h4 className="text-xl font-medium mb-4">Zapier MCP</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Minimal technical setup required</li>
                  <li>Pre-built authentication flows</li>
                  <li>GUI-based workflow configuration</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Recommended Pilot Approach */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <CheckCircleIcon className="h-6 w-6 text-green-600" />
              </div>
              Recommended Pilot Approach
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-green-50">
                <div className="bg-green-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-green-600">1</span>
                </div>
                <p>Start with Zapier MCP for workflow automation</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-green-50">
                <div className="bg-green-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-green-600">2</span>
                </div>
                <p>Deploy OpenAI/Claude MCP for document search</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-green-50">
                <div className="bg-green-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-green-600">3</span>
                </div>
                <p>Evaluate Docker MCP for sensitive use cases</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-green-50">
                <div className="bg-green-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-green-600">4</span>
                </div>
                <p>Scale successful pilots enterprise-wide</p>
              </div>
            </div>
          </div>
          
          {/* Security & Compliance Framework */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <CheckCircleIcon className="h-6 w-6 text-red-600" />
              </div>
              Security & Compliance Framework
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-red-50">
                <h4 className="text-xl font-medium mb-4">Risk Assessment</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg transition-all duration-300 hover:bg-yellow-100">
                    <p className="font-medium">OpenAI/Claude: Medium risk - filtered data transmission</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg transition-all duration-300 hover:bg-green-100">
                    <p className="font-medium">Docker: Low risk - complete internal control</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg transition-all duration-300 hover:bg-yellow-100">
                    <p className="font-medium">Zapier: Medium risk - managed third-party processing</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-red-50">
                <h4 className="text-xl font-medium mb-4">Compliance Controls</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Multi-factor authentication for all MCP connections</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Data encryption in transit and at rest</li>
                  <li>Comprehensive logging and monitoring</li>
                  <li>GDPR/SOC 2 compliance monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
            <p>All Systems Operational</p>
          </div>
          <p>&copy; 2024 MCP Connection Solutions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
